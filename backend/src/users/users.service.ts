import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BetUser, User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserInput, CreateUserOutput, FindUserInput, FindUserOutput } from './dtos/user.dtos';
import { TryCatch } from 'src/decorators/TryCatch.decorator';
import { Account } from './entities/account.entity';
import { CreateAccountInput, CreateAccountOutput } from './dtos/account.dto';
import { Member } from 'src/bets/dtos/bet.dto';
import { compare, hash } from 'bcrypt';

@Injectable()
export class UsersService {
  private bankCode = '004';
  private recentAccountNo = 1000000000;

  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    @InjectRepository(Account) private readonly accountRepository: Repository<Account>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async me(userId: number): Promise<User> {
    const me = await this.usersRepository.findOne({
      where: { id: userId },
      relations: [
        'friends',
        'betsCreated',
        'betsCreated.creator', // creator를 함께 로드
        'betsCreated.judge',
        'betsJudged',
        'betsJudged.creator', // creator를 함께 로드
        'betsJudged.judge',
        'account',
        'betsJoined',
        'betsJoined.creator', // creator를 함께 로드
        'betsJoined.judge',
      ],
    });

    return me;
  }

  //임시 로그인
  async findUser({ name }: FindUserInput): Promise<FindUserOutput> {
    const user = await this.usersRepository.findOne({ where: { name } });

    return { ok: true, user };
  }

  async findUserById(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });

    return user;
  }

  async getBetUsersById(members: Member[]): Promise<BetUser[]> {
    const betUsers = [];

    for (let i = 0; i < members.length; i++) {
      const { id, team } = members[i];
      const user = await this.findUserById(id);
      if (user) {
        const betUser = { ...user, team, isBet: false };

        betUsers.push(betUser);
      } else {
        return null;
      }
    }

    return betUsers;
  }

  async getUserWithFriends(userId: number): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { id: userId },
      relations: ['friends'],
    });

    return user;
  }

  @TryCatch('유저를 등록하지 못했습니다.')
  async createUser(createUserDto: CreateUserInput): Promise<CreateUserOutput> {
    const user = this.usersRepository.create(createUserDto);
    const accountResult = await this.createAccount({ owner: user });
    if (accountResult.ok === false) {
      return { ok: false, error: accountResult.error };
    }
    user.account = accountResult.account;

    await this.usersRepository.save(user);

    return { ok: true, user };
  }

  @TryCatch('계좌를 생성하지 못했습니다.')
  async createAccount(createAccount: CreateAccountInput): Promise<CreateAccountOutput> {
    const account = this.accountRepository.create(createAccount);
    account.bankCode = this.bankCode;
    account.accountNo = String(Number(this.bankCode) + this.recentAccountNo);

    const savedAccount = await this.accountRepository.save(account);
    this.recentAccountNo += Math.floor(Math.random() * 10);

    return { ok: true, account: savedAccount };
  }

  @TryCatch('친구 연결하지 못했습니다.')
  async createFriends(authUser: User, { id }) {
    const user = await this.getUserWithFriends(authUser.id);
    const friend = await this.getUserWithFriends(id);

    if (user && friend) {
      user.friends = [...(user.friends || []), friend];
      await this.usersRepository.save(user);
      friend.friends = [...(friend.friends || []), user];
      await this.usersRepository.save(friend);
      return { ok: true, user };
    } else {
      return { ok: false, error: '친구 id가 존재하지 않습니다' };
    }
  }

  async setCurrentRefreshToken(id: number, refreshToken: string) {
    const currentHashedRefreshToken = await hash(refreshToken, 10);
    await this.usersRepository.update(id, { currentHashedRefreshToken });
  }

  @TryCatch('refreshToken이 다릅니다')
  async getUserIfRefreshTokenMatches(authUser: User, refreshToken: string) {
    const user = await this.findUserById(authUser.id);

    if (!user || !user.currentHashedRefreshToken) {
      throw new UnauthorizedException('엑세스가 거부되었습니다.');
    }

    const isRefreshTokenMatching = await compare(refreshToken, authUser.currentHashedRefreshToken);

    if (isRefreshTokenMatching) {
      return authUser;
    } else {
      throw new UnauthorizedException('Refresh Token이 사용자 것과 일치하지 않습니다.');
    }
  }

  // 로그아웃시
  async removeRefreshToken(id: number) {
    return this.usersRepository.update(id, {
      currentHashedRefreshToken: null,
    });
  }
}

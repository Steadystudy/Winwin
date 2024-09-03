import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserInput, CreateUserOutput, FindUserInput, FindUserOutput } from './dtos/user.dtos';
import { TryCatch } from 'src/decorators/TryCatch.decorator';
import { Account } from './entities/account.entity';
import { CreateAccountInput, CreateAccountOutput } from './dtos/account.dto';

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
      relations: ['friends', 'betsCreated', 'betsJudged', 'account'],
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
      console.log(user.friends);
      user.friends = [...(user.friends || []), friend];
      await this.usersRepository.save(user);
      friend.friends = [...(friend.friends || []), user];
      await this.usersRepository.save(friend);
    }

    return { ok: true, user };
  }
}

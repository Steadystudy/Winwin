import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserInput, CreateUserOutput } from './dtos/user.dtos';
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

  @TryCatch('유저를 등록하지 못했습니다.')
  async createUser(createUserDto: CreateUserInput): Promise<CreateUserOutput> {
    const user = this.usersRepository.create(createUserDto);
    const accountResult = await this.createAccount({ owner: user });
    if (accountResult.ok === false) {
      return { ok: false, error: accountResult.error };
    }
    user.accounts = [accountResult.account];

    await this.usersRepository.save(user);

    return { ok: true, user };
  }

  @TryCatch('계좌를 생성하지 못했습니다.')
  private async createAccount(createAccount: CreateAccountInput): Promise<CreateAccountOutput> {
    const account = this.accountRepository.create(createAccount);
    account.bankCode = this.bankCode;
    account.accountNo = String(Number(this.bankCode) + this.recentAccountNo);

    const savedAccount = await this.accountRepository.save(account);
    this.recentAccountNo += Math.floor(Math.random() * 10);

    return { ok: true, account: savedAccount };
  }
}

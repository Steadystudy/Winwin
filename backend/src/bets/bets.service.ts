import { Inject, Injectable } from '@nestjs/common';
import { Bet } from './entities/bet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TryCatch } from 'src/decorators/TryCatch.decorator';
import { ChooseBetInput, ChooseBetOutput, CreateBetInput, CreateBetOutput } from './dtos/bet.dto';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { PUB_SUB } from 'src/common/common.module';
import { PubSub } from 'graphql-subscriptions';
import { BET_RESULT, PENDING_BET } from 'src/common/constants';

@Injectable()
export class BetsService {
  constructor(
    private readonly usersService: UsersService,
    @InjectRepository(Bet) private readonly betRepository: Repository<Bet>,
    @Inject(PUB_SUB) private readonly pubSub: PubSub,
  ) {}

  async findAll(): Promise<Bet[]> {
    return await this.betRepository.find();
  }

  @TryCatch('내기 생성에 실패했습니다.')
  async createBet(authUser: User, createBetInput: CreateBetInput): Promise<CreateBetOutput> {
    if (authUser.id !== createBetInput.creatorId) {
      return { ok: false, error: '내기 생성자와 로그인한 유저가 다릅니다.' };
    }
    const creator = await this.usersService.findUserById({ id: createBetInput.creatorId });
    const judge = await this.usersService.findUserById({ id: createBetInput.judgeId });

    const bet = this.betRepository.create({ ...createBetInput, creator, judge });
    await this.betRepository.save(bet);
    await this.pubSub.publish(PENDING_BET, {
      pendingBet: { bet },
    });

    return { ok: true, bet };
  }

  @TryCatch('결과를 저장하지 못했습니다.')
  async chooseBet(authUser: User, chooseBetInput: ChooseBetInput): Promise<ChooseBetOutput> {
    const { betId, judgeId, result } = chooseBetInput;
    if (authUser.id !== judgeId) {
      return { ok: false, error: '내기 심판 권한이 없습니다.' };
    }
    const bet = await this.betRepository.findOne({ where: { id: betId } });
    bet.result = result;
    await this.betRepository.save(bet);
    await this.pubSub.publish(BET_RESULT, {
      betResult: { bet },
    });

    return { ok: true };
  }
}

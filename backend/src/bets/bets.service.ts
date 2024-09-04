import { Inject, Injectable } from '@nestjs/common';
import { Bet, BetStatus } from './entities/bet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TryCatch } from 'src/decorators/TryCatch.decorator';
import {
  JudgeBetInput,
  JudgeBetOutput,
  CreateBetInput,
  CreateBetOutput,
  SendMoneyInput,
  SendMoneyOutput,
  CancelBetInput,
  CancelBetOutput,
} from './dtos/bet.dto';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { PUB_SUB } from 'src/common/common.module';
import { PubSub } from 'graphql-subscriptions';
import { BET_RESULT, BETTED, CANCELED, PENDING_BET } from 'src/common/constants';

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

  async findBetById(id: number): Promise<Bet> {
    return await this.betRepository.findOne({ where: { id } });
  }

  // 내기 생성, 알림
  @TryCatch('내기 생성에 실패했습니다.')
  async createBet(authUser: User, createBetInput: CreateBetInput): Promise<CreateBetOutput> {
    const { content, creatorId, judgeId, members, totalAmount } = createBetInput;

    if (authUser.id !== createBetInput.creatorId) {
      return { ok: false, error: '내기 생성자와 로그인한 유저가 다릅니다.' };
    }
    const creator = await this.usersService.findUserById(creatorId);
    const judge = await this.usersService.findUserById(judgeId);
    const betUsers = await this.usersService.getBetUsersById(members);
    if (!betUsers) {
      return { ok: false, error: '존재하지 않는 id가 있습니다.' };
    }

    const bet = this.betRepository.create({
      creator,
      judge,
      membersJoined: betUsers,
      content,
      totalAmount,
    });
    await this.betRepository.save(bet);
    await this.pubSub.publish(PENDING_BET, {
      pendingBet: { bet },
    });

    return { ok: true, bet };
  }

  // 심판이 내기 결과 입력, 알림
  @TryCatch('결과를 저장하지 못했습니다.')
  async judgeBet(authUser: User, chooseBetInput: JudgeBetInput): Promise<JudgeBetOutput> {
    const { betId, judgeId, result } = chooseBetInput;
    if (authUser.id !== judgeId) {
      return { ok: false, error: '내기 심판 권한이 없습니다.' };
    }
    const bet = await this.findBetById(betId);
    bet.result = result;
    await this.betRepository.save(bet);
    await this.pubSub.publish(BET_RESULT, {
      betResult: { bet },
    });

    return { ok: true };
  }

  // 임시로 돈 송금, 모금이 끝났을 때 알림
  @TryCatch('송금 저장하지 못했습니다.')
  async sendMoney(authUser: User, sendMoneyInput: SendMoneyInput): Promise<SendMoneyOutput> {
    const { betId, money } = sendMoneyInput;
    //FIXME -  고객 계좌금액이 배팅금액의 5배보다 적으면 에러 발생
    if (authUser.account.accountBalance < 0) {
      return { ok: false, error: '잔액이 부족합니다.' };
    }
    const bet = await this.findBetById(betId);
    const complete = this.isBettingComplete(bet);
    if (complete) {
      await this.pubSub.publish(BETTED, {
        bet,
      });
    }
    await this.betRepository.save(bet);

    return { ok: true };
  }

  isBettingComplete(bet: Bet): boolean {
    const { membersJoined } = bet;

    for (let i = 0; i < membersJoined.length; i++) {
      if (!membersJoined[i].isBet) {
        return false;
      }
    }

    return true;
  }

  // 내기 취소, 알림
  @TryCatch('취소에 실패했습니다.')
  async cancelBet(authUser: User, { betId }: CancelBetInput): Promise<CancelBetOutput> {
    const bet = await this.findBetById(betId);
    if (
      bet.membersJoined.map((user: User) => user.id).includes(authUser.id) ||
      bet.judgeId === authUser.id
    ) {
      bet.status = BetStatus.Canceled;
      await this.betRepository.save(bet);
      await this.pubSub.publish(CANCELED, {
        bet,
      });
      return { ok: true };
    }

    return { ok: false, error: '내기 삭제 권한이 없습니다.' };
  }
}

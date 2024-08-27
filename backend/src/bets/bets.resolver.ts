import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { BetsService } from './bets.service';
import { Bet } from './entities/bet.entity';
import {
  ChooseBetInput,
  ChooseBetOutput,
  CreateBetInput,
  CreateBetOutput,
  PendingBet,
  Roles,
  SendMoneyInput,
  SendMoneyOutput,
} from './dtos/bet.dto';
import { AuthUser } from 'src/decorators/AuthUser.decorator';
import { Inject } from '@nestjs/common';
import { PUB_SUB } from 'src/common/common.module';
import { PubSub } from 'graphql-subscriptions';
import { BET_RESULT, PENDING_BET } from 'src/common/constants';
import { User } from 'src/users/entities/user.entity';

@Resolver()
export class BetsResolver {
  constructor(
    private readonly betsService: BetsService,
    @Inject(PUB_SUB) private readonly pubSub: PubSub,
  ) {}

  @Query((returns) => [Bet])
  async bets(): Promise<Bet[]> {
    return this.betsService.findAll();
  }

  @Mutation((returns) => SendMoneyOutput)
  async sendMoney(
    @AuthUser() authUser: User,
    @Args('input') sendMoneyInput: SendMoneyInput,
  ): Promise<SendMoneyOutput> {
    return await this.betsService.sendMoney(authUser, sendMoneyInput);
  }

  @Mutation((returns) => CreateBetOutput)
  async createBet(
    @AuthUser() authUser: User,
    @Args('input') createBetInput: CreateBetInput,
  ): Promise<CreateBetOutput> {
    return await this.betsService.createBet(authUser, createBetInput);
  }

  @Subscription((returns) => PendingBet, {
    filter: ({ pendingBet: { bet } }, _, { user }) => {
      return bet.teamOne.concat(bet.teamTwo).includes(user.id) || user.id == bet.judgeId;
    },
    resolve: ({ pendingBet: { bet } }, _, { user }) => {
      return {
        bet,
        role:
          user.id === bet.judgeId
            ? Roles.JUDGE
            : user.id === bet.creatorId
              ? Roles.CREATOR
              : Roles.PARTICIPANT,
      };
    },
  })
  pendingBet() {
    return this.pubSub.asyncIterator(PENDING_BET);
  }

  @Mutation((returns) => CreateBetOutput)
  async chooseBet(
    @AuthUser() authUser: User,
    @Args('input') chooseBetInput: ChooseBetInput,
  ): Promise<ChooseBetOutput> {
    return this.betsService.chooseBet(authUser, chooseBetInput);
  }

  @Subscription((returns) => Bet, {
    filter: ({ pendingBet: { bet } }, _, { user }) => {
      return bet.teamOne.concat(bet.teamTwo).includes(user.id);
    },
    resolve: ({ pendingBet: { bet } }) => {
      return bet;
    },
  })
  betResult() {
    return this.pubSub.asyncIterator(BET_RESULT);
  }
}

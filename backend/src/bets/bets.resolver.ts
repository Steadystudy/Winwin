import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BetsService } from './bets.service';
import { Bet } from './entities/bet.entity';
import { CreateBetInput, CreateBetOutput } from './dtos/bet.dto';
import { AuthUser } from 'src/decorators/AuthUser.decorator';

@Resolver()
export class BetsResolver {
  constructor(private readonly betsService: BetsService) {}

  @Query((returns) => [Bet])
  async bets(): Promise<Bet[]> {
    return this.betsService.findAll();
  }

  @Mutation((returns) => CreateBetOutput)
  async createBet(
    @AuthUser() authUser,
    @Args('input') createBetInput: CreateBetInput,
  ): Promise<CreateBetOutput> {
    return await this.betsService.createBet(authUser, createBetInput);
  }
}

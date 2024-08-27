import { Field, InputType, Int, ObjectType, OmitType, PickType } from '@nestjs/graphql';
import { Bet } from '../entities/bet.entity';
import { CoreOutput } from 'src/common/dtos/output.dto';

@InputType()
export class CreateBetInput extends PickType(Bet, [
  'content',
  'totalAmount',
  'teamOne',
  'teamTwo',
]) {
  @Field((type) => Int)
  creatorId: number;

  @Field((type) => Int)
  judgeId: number;
}

@ObjectType()
export class CreateBetOutput extends CoreOutput {
  @Field({ nullable: true })
  bet?: Bet;
}

@InputType()
export class ChooseBetInput extends PickType(Bet, ['result']) {
  @Field((type) => Int)
  betId: number;

  @Field((type) => Int)
  judgeId: number;
}

@ObjectType()
export class ChooseBetOutput extends CoreOutput {}

@ObjectType()
export class PendingBet {
  @Field((type) => Bet)
  bet: Bet;

  @Field((type) => String)
  role: 'participant' | 'judge';
}

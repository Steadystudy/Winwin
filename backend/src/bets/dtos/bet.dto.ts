import { Field, InputType, Int, ObjectType, OmitType, PickType } from '@nestjs/graphql';
import { Bet } from '../entities/bet.entity';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Column } from 'typeorm';

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
  @Field()
  bet?: Bet;
}

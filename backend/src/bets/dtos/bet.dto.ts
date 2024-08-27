import {
  Field,
  InputType,
  Int,
  ObjectType,
  OmitType,
  PickType,
  registerEnumType,
} from '@nestjs/graphql';
import { Bet } from '../entities/bet.entity';
import { CoreOutput } from 'src/common/dtos/output.dto';

export enum Roles {
  PARTICIPANT = 'participant',
  JUDGE = 'judge',
  CREATOR = 'creator',
}
registerEnumType(Roles, { name: 'Roles' });

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

  @Field((type) => Roles)
  role: Roles;
}

@InputType()
export class SendMoneyInput {
  @Field((type) => Int)
  betId: number;

  @Field((type) => Int)
  money: number;
}

@ObjectType()
export class SendMoneyOutput extends CoreOutput {}

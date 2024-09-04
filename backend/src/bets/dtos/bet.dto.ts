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

@InputType('MemberType')
@ObjectType()
export class Member {
  @Field((type) => Number)
  id: number;

  @Field((type) => Number)
  team: number;
}

@InputType()
export class CreateBetInput extends PickType(Bet, ['content', 'totalAmount']) {
  @Field((type) => Int)
  creatorId: number;

  @Field((type) => Int)
  judgeId: number;

  @Field((type) => [Member])
  members: Member[];
}

@ObjectType()
export class CreateBetOutput extends CoreOutput {
  @Field({ nullable: true })
  bet?: Bet;
}

@InputType()
export class JudgeBetInput extends PickType(Bet, ['result']) {
  @Field((type) => Int)
  betId: number;

  @Field((type) => Int)
  judgeId: number;
}

@ObjectType()
export class JudgeBetOutput extends CoreOutput {}

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

@InputType()
export class CancelBetInput {
  @Field((type) => Int)
  betId: number;
}

@ObjectType()
export class CancelBetOutput extends CoreOutput {}

@InputType()
export class GetBetInput {
  @Field((type) => Int)
  betId: number;
}

@ObjectType()
export class GetBetOutput extends CoreOutput {
  @Field((type) => Bet)
  bet?: Bet;
}

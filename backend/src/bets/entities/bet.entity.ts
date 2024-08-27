import { Field, InputType, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { isEnum } from 'class-validator';
import { CoreEntity } from 'src/common/entity/core.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, RelationId } from 'typeorm';

type Result = 'teamOne' | 'teamTwo';
enum BetStatus {
  Betting = 'Betting',
  Betted = 'Betted',
  Done = 'Done',
}
registerEnumType(BetStatus, { name: 'BetStatus' });

@Entity({
  name: 'bets',
})
@InputType('BetInputType', { isAbstract: true })
@ObjectType()
export class Bet extends CoreEntity {
  @Field((type) => User)
  @ManyToOne((type) => User, (user) => user.betsCreated, {
    onDelete: 'CASCADE',
  })
  creator: User;

  @RelationId((bet: Bet) => bet.creator)
  creatorId: number;

  @Field((type) => User)
  @ManyToOne((type) => User, (user) => user.betsJudged, {
    onDelete: 'CASCADE',
  })
  judge: User;

  @RelationId((bet: Bet) => bet.judge)
  judgeId: number;

  @Field((type) => String)
  @Column()
  content: string;

  @Field((type) => Int)
  @Column()
  totalAmount: number;

  @Field((type) => Boolean)
  @Column({ default: false })
  DepositComplete: boolean;

  @Column({ type: 'enum', enum: BetStatus, default: BetStatus.Betting })
  @Field((type) => BetStatus)
  status: BetStatus;

  @Field((type) => [Int])
  @Column('json', { nullable: true })
  bettedMembers?: number[];

  @Field((type) => String)
  @Column({ nullable: true })
  result?: Result;

  @Field((type) => [Int])
  @Column('json', { nullable: true })
  teamOne?: number[];

  @Field((type) => [Int])
  @Column('json', { nullable: true })
  teamTwo?: number[];
}

import { Field, InputType, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { isEnum } from 'class-validator';
import { CoreEntity } from 'src/common/entity/core.entity';
import { BetUser, User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, RelationId } from 'typeorm';

export enum BetStatus {
  Canceled = 'Canceled',
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
  title: string;

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

  @Field((type) => Number, { nullable: true })
  @Column({ nullable: true })
  result?: number;

  @Field((type) => [BetUser])
  @Column('json')
  teams: BetUser[];

  @Field((type) => [User], { nullable: true })
  @ManyToMany((type) => User, (user) => user.betsJoined, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinTable({
    name: 'users_bets_joined_bets',
    joinColumn: { name: 'bets', referencedColumnName: 'id' }, // 이 테이블의 외래 키
    inverseJoinColumn: { name: 'users', referencedColumnName: 'id' },
  })
  membersJoined?: User[];
}

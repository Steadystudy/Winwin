import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entity/core.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, RelationId } from 'typeorm';

type Result = 'teamOne' | 'teamTwo';

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
  status: boolean;

  @Field((type) => String)
  @Column({ nullable: true })
  result?: Result;

  @Field((type) => [User])
  @Column('json', { nullable: true })
  teamOne?: User[];

  @Field((type) => [User])
  @Column('json', { nullable: true })
  teamTwo?: User[];
}

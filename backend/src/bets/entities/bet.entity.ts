import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entity/core.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, RelationId } from 'typeorm';

type Result = 'teamOne' | 'teamTwo';

@Entity({
  name: 'bets',
})
@InputType('BetInputType', { isAbstract: true })
@ObjectType()
export class Bet extends CoreEntity {
  @RelationId((creator: User) => creator.id)
  creatorId: number;

  @RelationId((judge: User) => judge.id)
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
  @Column()
  teamOne: User[];

  @Field((type) => [User])
  @Column()
  teamTwo: User[];
}

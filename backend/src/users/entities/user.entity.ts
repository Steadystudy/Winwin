import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Account } from 'src/users/entities/account.entity';
import { CoreEntity } from 'src/common/entity/core.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Bet } from 'src/bets/entities/bet.entity';
import { Length } from 'class-validator';

@Entity({
  name: 'users',
})
@InputType('UserInputType', { isAbstract: true })
@ObjectType()
export class User extends CoreEntity {
  @Column()
  @Field((type) => String)
  @Length(1, 8)
  name: string;

  @Column({ default: null })
  @Field((type) => String, { nullable: true })
  profileImg?: string;

  @Field((type) => [Account], { nullable: true })
  @OneToMany((type) => Account, (account) => account.owner, {
    onDelete: 'CASCADE',
  })
  accounts?: Account[];

  @Field((type) => [Bet], { nullable: true })
  @OneToMany((type) => Bet, (bet) => bet.creator, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  betsCreated?: Bet[];

  @Field((type) => [Bet], { nullable: true })
  @Column('json', { nullable: true })
  betsJoined?: Bet[];

  @Field((type) => [Bet], { nullable: true })
  @OneToMany((type) => Bet, (bet) => bet.judge, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  betsJudged?: Bet[];
}

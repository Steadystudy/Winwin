import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Account } from 'src/users/entities/account.entity';
import { CoreEntity } from 'src/common/entity/core.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne } from 'typeorm';
import { Bet } from 'src/bets/entities/bet.entity';
import { Length } from 'class-validator';
import { Exclude } from 'class-transformer';

@Entity({
  name: 'users',
})
@InputType('UserInputType', { isAbstract: true })
@ObjectType()
export class User extends CoreEntity {
  @Column({ nullable: true })
  @Exclude()
  currentHashedRefreshToken?: string;

  @Column()
  @Field((type) => String)
  @Length(1, 8)
  name: string;

  @Column({ default: null })
  @Field((type) => String, { nullable: true })
  profileImg?: string;

  @Field((type) => [Account], { nullable: true })
  @OneToOne((type) => Account, (account) => account.owner, {
    onDelete: 'CASCADE',
  })
  account?: Account;

  @Field((type) => [Bet], { nullable: true })
  @OneToMany((type) => Bet, (bet) => bet.creator, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  betsCreated?: Bet[];

  @Field((type) => [Bet], { nullable: true })
  @ManyToMany((type) => Bet, (bet) => bet.membersJoined, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  betsJoined?: Bet[];

  @Field((type) => [Bet], { nullable: true })
  @OneToMany((type) => Bet, (bet) => bet.judge, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  betsJudged?: Bet[];

  @Field((type) => [User], { nullable: true })
  @JoinTable()
  @ManyToMany((type) => User, (user) => user.friends, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  friends?: User[];
}
@Entity()
@InputType('BetUserInput', { isAbstract: true })
@ObjectType()
export class BetUser extends User {
  @Column()
  @Field((type) => Int)
  team: number;

  @Column({ default: false })
  @Field((type) => Boolean)
  isBet: boolean;
}

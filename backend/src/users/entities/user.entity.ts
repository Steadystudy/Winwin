import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Account } from 'src/accounts/entities/account.entity';
import { CoreEntity } from 'src/common/entity/core.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
})
@InputType('UserInputType', { isAbstract: true })
@ObjectType()
export class User extends CoreEntity {
  @Column()
  @Field((type) => String)
  name: string;

  @Column()
  @Field((type) => String)
  profileImg: string;

  @Field((type) => [Account], { nullable: true })
  @OneToMany((type) => Account, (account) => account.owner)
  accounts?: Account[];
}

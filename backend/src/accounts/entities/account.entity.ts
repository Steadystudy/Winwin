import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entity/core.entity';
import { User } from 'src/users/entities/user.entity';
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({
  name: 'account',
})
@InputType('AccountInputType', { isAbstract: true })
@ObjectType()
export class Account extends CoreEntity {
  @Field((type) => User)
  @ManyToOne((type) => User, (user) => user.accounts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  owner: User;

  @Field((type) => String)
  @Column({ default: '004' })
  bankCode: string;

  @Field((type) => String)
  @Column({ default: '국민' })
  bankName: string;

  @Field((type) => Int)
  @Column({ type: 'bigint' })
  accountTypeCode: number;

  // Feat
  // @BeforeInsert()
  // async createUniqueAccountTypeCode()

  @Field((type) => String)
  @Column()
  accountNo: string;

  @BeforeInsert()
  createAccountNo(): void {
    this.accountNo = this.bankCode + this.accountTypeCode;
  }

  @Field((type) => Date)
  @Column()
  expiredAt: Date;

  @BeforeInsert()
  createExpiredAt(): void {
    const date = new Date(this.createdAt);
    date.setFullYear(this.createdAt.getFullYear() + 2);
    this.expiredAt = date;
  }

  @Field((type) => Int)
  @Column({ default: 1000000 })
  dailyTransferLimit: number;

  @Field((type) => Int)
  @Column({ default: 1000000 })
  oneTimeTransferLimit: number;

  @Field((type) => Int)
  @Column({ default: 0 })
  accountBalance: number;

  @Field((type) => Boolean)
  @Column({ default: false })
  isPrimary: boolean;

  //lastTransactionDate
}

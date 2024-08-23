import { Field, PickType } from '@nestjs/graphql';
import { Account } from '../entities/account.entity';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Column } from 'typeorm';

export class CreateAccountInput extends PickType(Account, ['owner']) {}

export class CreateAccountOutput extends CoreOutput {
  @Field()
  account: Account;
}

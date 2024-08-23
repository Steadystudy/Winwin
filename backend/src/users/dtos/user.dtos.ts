import { Field, InputType, ObjectType, PartialType, PickType } from '@nestjs/graphql';
import { User } from '../entities/user.entity';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Column } from 'typeorm';

@InputType()
export class CreateUserInput extends PickType(User, ['name', 'profileImg']) {}

@ObjectType()
export class CreateUserOutput extends CoreOutput {
  @Field()
  user?: User;
}

@InputType()
export class FindUserInput extends PickType(User, ['name']) {}

@ObjectType()
export class FindUserOutput extends CoreOutput {
  @Field()
  user: User;
}

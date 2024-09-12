import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';
import { CoreOutput } from 'src/common/dtos/output.dto';

@InputType()
export class LoginInput extends PickType(User, ['name']) {}

@ObjectType()
export class LoginOutput extends CoreOutput {
  @Field((type) => String, { nullable: true })
  token?: string;
}

@InputType()
export class LogoutInput extends PickType(User, ['id']) {}

@ObjectType()
export class LogoutOutput extends CoreOutput {}

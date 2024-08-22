import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput, CreateUserOutput } from './dtos/user.dtos';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query((returns) => [User])
  async me(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Mutation((returns) => CreateUserOutput)
  async createUser(@Args('input') createUserInput: CreateUserInput): Promise<CreateUserOutput> {
    return await this.usersService.createUser(createUserInput);
  }
}

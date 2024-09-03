import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import {
  CreateFriendsInput,
  CreateFriendsOutput,
  CreateUserInput,
  CreateUserOutput,
  FindUserInput,
  FindUserOutput,
} from './dtos/user.dtos';
import { AuthUser } from 'src/decorators/AuthUser.decorator';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query((returns) => User)
  async me(@AuthUser() authUser: User): Promise<User> {
    return await this.usersService.me(authUser.id);
  }

  @Query((returns) => User)
  async getUserWithFriends(@AuthUser() authUser: User): Promise<User> {
    return await this.usersService.getUserWithFriends(authUser.id);
  }

  @Query((returns) => User)
  async findUser(@Args('input') findUserInput: FindUserInput): Promise<FindUserOutput> {
    return await this.usersService.findUser(findUserInput);
  }

  @Mutation((returns) => CreateUserOutput)
  async createUser(@Args('input') createUserInput: CreateUserInput): Promise<CreateUserOutput> {
    return await this.usersService.createUser(createUserInput);
  }

  @Mutation((returns) => CreateFriendsOutput)
  async createFriends(
    @AuthUser() authUser: User,
    @Args('input') createFriendsInput: CreateFriendsInput,
  ): Promise<CreateFriendsOutput> {
    return await this.usersService.createFriends(authUser, createFriendsInput);
  }
}

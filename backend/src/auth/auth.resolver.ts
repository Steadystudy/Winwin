import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { AuthService } from './auth.service';
import { CoreOutput } from 'src/common/dtos/output.dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation((returns) => LoginOutput)
  async login(@Args('input') loginInput: LoginInput, @Context() context): Promise<LoginOutput> {
    return this.authService.login(loginInput, context);
  }
}

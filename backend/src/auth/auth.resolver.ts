import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginInput, LoginOutput, LogoutInput, LogoutOutput } from './dtos/login.dto';
import { AuthService } from './auth.service';
import { Public } from 'src/decorators/Public.decorator';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Mutation((returns) => LoginOutput)
  async login(@Args('input') loginInput: LoginInput, @Context() context): Promise<LoginOutput> {
    return await this.authService.login(loginInput, context.res);
  }

  @Mutation((returns) => LogoutOutput)
  async logout(@Args('input') logoutInput: LogoutInput, @Context() context): Promise<LoginOutput> {
    return await this.authService.logout(logoutInput, context.res);
  }
}

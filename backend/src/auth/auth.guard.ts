import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
@Injectable()
export class UserGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.get<boolean>('isPublic', context?.getHandler());
    if (isPublic) {
      return true;
    }

    const gqlContext = GqlExecutionContext.create(context).getContext();
    const { res, cookies } = gqlContext;

    let accessToken = cookies?.accessToken;
    const refreshToken = cookies?.refreshToken;

    // graphql playground test를 위한 x-jwt 토큰
    if (gqlContext['token']) {
      accessToken = gqlContext['token'];
    }

    try {
      const decoded = this.jwtService.verify(accessToken);
      if (typeof decoded === 'object' && decoded.hasOwnProperty('id')) {
        const userId = decoded['id'];
        const user = await this.usersService.findUserById(userId);

        if (user) {
          gqlContext['user'] = user;

          return true;
        }
      }
    } catch (e) {
      if (!refreshToken || !res) return false;
      const authUser = this.authService.regenerateTokenByRefresh(refreshToken, res);
      if (!authUser) {
        return false;
      }
      gqlContext['user'] = authUser;

      return true;
    }

    return false;
  }
}

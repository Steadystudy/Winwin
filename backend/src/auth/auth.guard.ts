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
    const isPublic = this.reflector.get<boolean>('isPublic', context.getHandler());
    if (isPublic) {
      return true;
    }

    const gqlContext = GqlExecutionContext.create(context).getContext();
    const cookies = gqlContext.req?.cookies;
    const accessToken = cookies?.accessToken;
    const refreshToken = cookies?.refreshToken;

    if (!refreshToken) return false;

    // const decoded = this.jwtService.verify(refreshToken, {
    //   secret: `${this.configService.get('JWT_REFRESH_TOKEN_SECRET_KEY')}`,
    // });

    // const userId = decoded['id'];
    // const user = await this.usersService.findUserById(userId);
    // const a = await this.usersService.getUserIfRefreshTokenMatches(user, refreshToken);
    // if (a) {
    //   gqlContext['user'] = a;
    //   return true;
    // }

    if (accessToken) {
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
        // 현재 access token저장이 아닌 refresh token으로 저장하고 있음
        // res.cookie로 저장 어떻게 하지?

        const refreshDecoded = this.jwtService.verify(refreshToken, {
          secret: `${this.configService.get('JWT_REFRESH_TOKEN_SECRET_KEY')}`,
        });
        const userId = refreshDecoded['id'];
        const user = await this.usersService.findUserById(userId);
        const a = await this.usersService.getUserIfRefreshTokenMatches(user, refreshToken);

        this.authService.generateAccessTokens(a.id);
        if (a) {
          gqlContext['user'] = a;
          return true;
        }
        return false;
      }
    }
    // 일시적으로 다 허용
    return true;
  }
}

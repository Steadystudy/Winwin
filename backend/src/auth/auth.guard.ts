import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { serialize } from 'cookie';
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
    const { req, res } = gqlContext;

    const accessToken = req.cookies?.accessToken;
    const refreshToken = req.cookies?.refreshToken;

    if (!refreshToken) return false;

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
        const refreshDecoded = this.jwtService.verify(refreshToken, {
          secret: `${this.configService.get('JWT_REFRESH_TOKEN_SECRET_KEY')}`,
        });
        const userId = refreshDecoded['id'];
        const user = await this.usersService.findUserById(userId);
        const authUser = await this.usersService.getUserIfRefreshTokenMatches(user, refreshToken);

        if (authUser) {
          const { accessToken, ...accessOptions } = await this.authService.generateAccessTokens(
            authUser.id,
          );
          res.setHeader('Set-Cookie', serialize('accessToken', accessToken, accessOptions));
          gqlContext['user'] = authUser;
          return true;
        }
        return false;
      }
    }
    // 일시적으로 다 허용
    return true;
  }
}

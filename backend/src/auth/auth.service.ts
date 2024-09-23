import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { User } from 'src/users/entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { serialize } from 'cookie';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async generateRefreshTokens(id: number) {
    const refreshToken = this.jwtService.sign(
      { id },
      {
        secret: `${this.configService.get('JWT_REFRESH_TOKEN_SECRET_KEY')}`,
        expiresIn: `${this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')}s`,
      },
    );

    return {
      refreshToken,
      domain: 'localhost',
      path: '/',
      httpOnly: true,
      sameSite: 'lax' as const,
      secure: process.env.NODE_ENV === 'production',
      maxAge: Number(this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')) * 1000,
    };
  }

  async generateAccessTokens(id: number) {
    const accessToken = this.jwtService.sign({ id });
    return {
      accessToken,
      domain: 'localhost',
      path: '/',
      httpOnly: true,
      sameSite: 'lax' as const,
      secure: process.env.NODE_ENV === 'production',
      maxAge: Number(this.configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')) * 1000,
    };
  }

  async regenerateTokenByRefresh(refreshToken: string, res: Response): Promise<User | null> {
    const refreshDecoded = this.jwtService.verify(refreshToken, {
      secret: `${this.configService.get('JWT_REFRESH_TOKEN_SECRET_KEY')}`,
    });
    const userId = refreshDecoded['id'];
    const user = await this.usersService.findUserById(userId);
    const authUser = await this.usersService.getUserIfRefreshTokenMatches(user, refreshToken);

    if (authUser) {
      const { accessToken, ...accessOptions } = await this.generateAccessTokens(authUser.id);
      res.setHeader('Set-Cookie', serialize('accessToken', accessToken, accessOptions));

      return authUser;
    }
    return null;
  }

  async login({ name }: LoginInput, res: Response): Promise<LoginOutput> {
    const { ok, user } = await this.usersService.findUser({ name });

    if (!ok) {
      return { ok, error: '존재하지 않는 유저입니다.' };
    }

    const { refreshToken, ...refreshOption } = await this.generateRefreshTokens(user.id);
    const { accessToken, ...accessOption } = await this.generateAccessTokens(user.id);

    await this.usersService.setCurrentRefreshToken(user.id, refreshToken);
    res.setHeader('Set-Cookie', serialize('accessToken', accessToken, accessOption));
    res.setHeader('Set-Cookie', serialize('refreshToken', refreshToken, refreshOption));

    return {
      ok: true,
      token: accessToken,
    };
  }

  async logout({ id }, res: Response) {
    await this.usersService.removeRefreshToken(id);

    res.setHeader('Set-Cookie', [
      serialize('accessToken', '', {
        domain: 'localhost',
        path: '/',
        httpOnly: true,
        sameSite: 'lax' as const,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 0,
      }),
      serialize('refreshToken', '', {
        domain: 'localhost',
        path: '/',
        httpOnly: true,
        sameSite: 'lax' as const,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 0,
      }),
    ]);

    return {
      ok: true,
    };
  }
}

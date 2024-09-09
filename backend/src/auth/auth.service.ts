import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { User } from 'src/users/entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

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
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: Number(this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')) * 1000,
    };
  }

  async generateAccessTokens(id: number) {
    const accessToken = this.jwtService.sign({ id });

    return {
      accessToken,
      domain: 'localhost',
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: Number(this.configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')) * 1000,
    };
  }

  async login({ name }: LoginInput, context: any): Promise<LoginOutput> {
    const { ok, user } = await this.usersService.findUser({ name });
    if (!ok) {
      return { ok, error: '존재하지 않는 유저입니다.' };
    }

    // const { refreshToken, ...refreshOption } = await this.generateRefreshTokens(user.id);
    const { accessToken, ...accessOption } = await this.generateAccessTokens(user.id);

    // await this.usersService.setCurrentRefreshToken(user.id, refreshToken);
    // context.res.cookie('refreshToken', refreshToken, refreshOption);
    // context.res.cookie('Authentication', '', accessOption);

    return {
      ok: true,
      token: accessToken,
    };
  }
}

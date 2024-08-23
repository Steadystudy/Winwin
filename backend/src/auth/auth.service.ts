import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginInput, LoginOutput } from './dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login({ name }: LoginInput): Promise<LoginOutput> {
    const { ok, user } = await this.usersService.findUser({ name });
    if (!ok) {
      return { ok, error: '존재하지 않는 유저입니다.' };
    }
    const payload = { id: user.id };
    const token = this.jwtService.sign(payload);

    return {
      ok: true,
      token: token,
    };
  }
}

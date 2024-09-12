import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginInput, LogoutInput } from './dtos/login.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginInput: LoginInput, @Res() res: Response) {
    const output = await this.authService.login(loginInput, res);

    return res.json(output);
  }

  @Post('logout')
  async logout(@Body() logoutInput: LogoutInput, @Res() res: Response) {
    const output = await this.authService.logout(logoutInput, res);

    return res.json(output);
  }
}

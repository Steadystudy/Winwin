import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginInput, LogoutInput } from './dtos/login.dto';
import { Response } from 'express';
import { Public } from 'src/decorators/Public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Public()
  async login(@Body() loginInput: LoginInput, @Res() res: Response) {
    const output = await this.authService.login(loginInput, res);

    return res.json(output);
  }

  @Post('logout')
  @Public()
  async logout(@Body() logoutInput: LogoutInput, @Res() res: Response) {
    const output = await this.authService.logout(logoutInput, res);

    return res.json(output);
  }
}

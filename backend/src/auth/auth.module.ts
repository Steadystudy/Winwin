import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from 'src/users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { UserGuard } from './auth.guard';

@Module({
  imports: [UsersModule],
  providers: [
    AuthService,
    AuthResolver,
    {
      provide: APP_GUARD,
      useClass: UserGuard,
    },
  ],
  exports: [AuthService],
})
export class AuthModule {}

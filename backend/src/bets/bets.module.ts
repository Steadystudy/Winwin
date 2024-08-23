import { Module } from '@nestjs/common';
import { BetsService } from './bets.service';
import { BetsResolver } from './bets.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bet } from './entities/bet.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Bet]), UsersModule],
  providers: [BetsService, BetsResolver],
  exports: [BetsService],
})
export class BetsModule {}

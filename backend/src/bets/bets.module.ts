import { Module } from '@nestjs/common';
import { BetsService } from './bets.service';
import { BetsResolver } from './bets.resolver';

@Module({
  providers: [BetsService, BetsResolver]
})
export class BetsModule {}

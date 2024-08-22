import { Injectable } from '@nestjs/common';
import { Bet } from './entities/bet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TryCatch } from 'src/decorators/TryCatch.decorator';
import { CreateBetInput, CreateBetOutput } from './dtos/bet.dto';

@Injectable()
export class BetsService {
  constructor(@InjectRepository(Bet) private readonly betRepository: Repository<Bet>) {}

  async findAll(): Promise<Bet[]> {
    return await this.betRepository.find();
  }

  @TryCatch('내기 생성에 실패했습니다.')
  async createBet(createBetInput: CreateBetInput): Promise<CreateBetOutput> {
    const bet = this.betRepository.create(createBetInput);
    const savedBet = await this.betRepository.save(bet);

    return { ok: true, bet: savedBet };
  }
}

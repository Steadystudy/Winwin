import { Injectable } from '@nestjs/common';
import { Bet } from './entities/bet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TryCatch } from 'src/decorators/TryCatch.decorator';
import { CreateBetInput, CreateBetOutput } from './dtos/bet.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class BetsService {
  constructor(
    private readonly usersService: UsersService,
    @InjectRepository(Bet) private readonly betRepository: Repository<Bet>,
  ) {}

  async findAll(): Promise<Bet[]> {
    return await this.betRepository.find();
  }

  @TryCatch('내기 생성에 실패했습니다.')
  async createBet(createBetIntput: CreateBetInput): Promise<CreateBetOutput> {
    const creator = await this.usersService.findUserById({ id: createBetIntput.creatorId });
    const judge = await this.usersService.findUserById({ id: createBetIntput.judgeId });

    const bet = this.betRepository.create({ ...createBetIntput, creator, judge });
    await this.betRepository.save(bet);

    return { ok: true, bet };
  }
}

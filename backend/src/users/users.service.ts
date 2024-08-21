import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dtos/user.dtos';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async createUser(createUserDto: CreateUserInput): Promise<User> {
    const user = await this.usersRepository.create(createUserDto);

    return await this.usersRepository.save(user);
  }
}

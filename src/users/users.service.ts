import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersDto } from './users.dto';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  create(user: UsersDto): Promise<UsersEntity> {
    // use bycrpt to hash password before create the user
    return this.usersRepository.save(this.usersRepository.create(user));
  }

  findAll(): Promise<UsersEntity[]> {
    return this.usersRepository.find();
  }

  findOne(username: string): Promise<UsersEntity | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}

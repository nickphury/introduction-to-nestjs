import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersDto } from './users.dto';
import { UsersEntity } from './users.entity';
import * as bcrypt from 'bcrypt';
import { BCRYPT_SALT_ROUNDS } from './../constants/config';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  async create(user: UsersDto): Promise<any> {
    const hash = bcrypt.hashSync(user.password, BCRYPT_SALT_ROUNDS);
    const { password, ...result } = await this.usersRepository.save(
      this.usersRepository.create({ ...user, password: hash }),
    );
    return Promise.resolve(result);
  }

  findAll(): Promise<UsersEntity[]> {
    return this.usersRepository.find();
  }

  findOne(username: string): Promise<UsersEntity | undefined> {
    return this.usersRepository.findOne({
      where: { username },
      relations: {
        roles: true,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}

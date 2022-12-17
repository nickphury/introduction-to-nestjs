import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { UsersEntity } from './users.entity';

@Injectable()
export class UsersService {
  constructor() // @InjectRepository(UsersEntity)
  // private usersRepository: Repository<UsersEntity>,
  {}

  // public findOne(username: string): Promise<UsersEntity | undefined> {
  //   return this.usersRepository.findOne({ username });
  // }
}

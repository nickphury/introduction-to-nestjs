import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDao } from './interfaces/user.interface';
import { UserRepository } from './user-repository';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  create(user: UserDao): Promise<User> {
    return this.userRepository.save(this.userRepository.create(user));
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async createMany(users: UserDao[]) {
    let usersTmp: User[] = [];
    users.forEach((user) => usersTmp.push(this.userRepository.create(user)));
    return this.userRepository.createMany(usersTmp);
  }
}

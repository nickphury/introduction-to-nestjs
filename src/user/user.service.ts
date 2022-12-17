import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto/user-dto';
import { UserRepository } from './user-repository';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  create(user: UserDto): Promise<User> {
    return this.userRepository.save(this.userRepository.create(user));
  }

  findAll(): Promise<User[]> {
    console.warn('no cache');
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async createMany(users: UserDto[]) {
    let usersTmp: User[] = [];
    users.forEach((user) => usersTmp.push(this.userRepository.create(user)));
    return this.userRepository.createMany(usersTmp);
  }
}

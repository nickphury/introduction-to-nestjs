import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { UserDto } from './dto/user-dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private dataSource: DataSource,
  ) {}

  create(user: UserDto): Promise<User> {
    return this.userRepository.save(this.userRepository.create(user));
  }

  findAll(): Promise<User[]> {
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
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      users.forEach(async (user) => {
        await queryRunner.manager.save(user);
      });
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}

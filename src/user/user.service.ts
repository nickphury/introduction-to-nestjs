import { Injectable } from '@nestjs/common';
import { UserDao } from './interfaces/user.interface';

@Injectable()
export class UserService {
  create(user: UserDao) {
    console.warn('object : ', user);
  }

  findAll(): UserDao[] {
    return [];
  }

  findOne(firstName: string) {
    console.warn(`Hello ${firstName}`);
  }
}

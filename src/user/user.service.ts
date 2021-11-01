import { Injectable } from '@nestjs/common';
import { UserDao } from './interfaces/user.interface';

@Injectable()
export class UserService {
  create(cat: UserDao) {
    // this.cats.push(cat);
  }

  findAll(): UserDao[] {
    return [];
  }

  findOne(firstName: string) {
    console.warn(`Hello ${firstName}`);
  }
}

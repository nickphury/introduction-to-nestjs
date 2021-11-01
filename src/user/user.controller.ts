import { Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/decorator/user.decorator';
import { UserDao } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(cat: UserDao) {
    // this.cats.push(cat);
  }

  @Get()
  async findAll(): Promise<UserDao[]> {
    return this.userService.findAll();
  }

  @Get(':firstName')
  async findOne(@Param('firstName') @User('firstName') firstName: string) {
    this.userService.findOne(firstName);
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/decorator/user.decorator';
import { UserDao } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() user: UserDao) {
    return await this.userService.create(user);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':firstName')
  async findOne(@Param('firstName') @User('firstName') firstName: string) {
    return await this.userService.findOne(firstName);
  }
}

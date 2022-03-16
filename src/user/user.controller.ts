import {
  Body,
  CacheKey,
  CacheTTL,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { UserDto } from './dto/user-dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() user: UserDto) {
    return await this.userService.create(user);
  }

  @Post('many')
  async createMany(@Body() users: UserDto[]) {
    return await this.userService.createMany(users);
  }

  @Get()
  @CacheKey(process.env.CACHE_USERS)
  @CacheTTL(parseInt(process.env.CACHE_TTL, 10))
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':uuid')
  async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return await this.userService.findOne(uuid);
  }

  @Delete(':uuid')
  async delete(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return await this.userService.delete(uuid);
  }
}

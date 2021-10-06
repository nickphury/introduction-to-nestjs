import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Post,
} from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { Cat } from 'src/cats/interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
    throw new ForbiddenException();
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
    // console.warn('object');
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}

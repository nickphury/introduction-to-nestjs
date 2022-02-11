import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { CatDto } from 'src/cats/dto/create-cat.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@Controller('cats')
//@UseGuards(RolesGuard)
//@UseInterceptors(LoggingInterceptor)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body(/*new ValidationPipe()*/) cat: CatDto) {
    console.warn(cat);
    return await this.catsService.create(cat);
  }

  @Get()
  async findAll() {
    return await this.catsService.findAll();
  }

  @Get(':uuid')
  async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return this.catsService.findOne(uuid);
  }

  @Delete(':uuid')
  async delete(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return this.catsService.delete(uuid);
  }
}

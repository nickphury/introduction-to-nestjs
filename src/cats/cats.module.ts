import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [
    CatsService,
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ],
})
export class CatsModule {}

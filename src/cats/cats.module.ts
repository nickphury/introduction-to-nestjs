import { Module } from '@nestjs/common';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [
    CatsService,
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class CatsModule {}

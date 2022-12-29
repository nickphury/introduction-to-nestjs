import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpExceptionFilter } from './../filters/http-exception.filter';
import { Cat } from './cat.entity';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [
    CatsService,
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ],
  imports: [TypeOrmModule.forFeature([Cat])],
  exports: [CatsService],
})
export class CatsModule {}

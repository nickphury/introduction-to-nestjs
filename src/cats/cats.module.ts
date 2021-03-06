import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { RolesGuard } from 'src/guards/roles.guard';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { Cat } from './cat.entity';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [
    CatsService,
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidationPipe,
    // },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  imports: [TypeOrmModule.forFeature([Cat])],
})
export class CatsModule {}

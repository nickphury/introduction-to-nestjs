import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  imports: [TypeOrmModule.forFeature([UsersEntity])],
})
export class UsersModule {}

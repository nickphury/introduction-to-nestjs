import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';
import { CatDto } from './dto/cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private catRepository: Repository<Cat>) {}

  create(cat: CatDto): Promise<Cat> {
    return this.catRepository.save(this.catRepository.create(cat));
  }

  findAll(): Promise<Cat[]> {
    return this.catRepository.find({ relations: ['user'] });
  }

  findOne(id: string): Promise<Cat> {
    return this.catRepository.findOne(id, { relations: ['user'] });
  }

  async delete(id: string): Promise<void> {
    await this.catRepository.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';
import { Cat } from 'src/cats/interfaces/cat.interface';

@Injectable()
export class CatsService {
  constructor(private lazyModuleLoader: LazyModuleLoader) {}
  private readonly cats: Cat[] = [
    {
      age: 3,
      breed: 'rrrrrrrrrr',
      name: 'ben',
    },
    {
      age: 2,
      breed: 'rrrrrrrrrr',
      name: 'ben',
    },
  ];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: string) {
    return this.cats.filter((c: Cat) => c.name === id);
  }
}

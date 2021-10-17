import { Injectable } from '@nestjs/common';
import { Cat } from 'src/cats/interfaces/cat.interface';

@Injectable()
export class CatsService {
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
    {
      age: 1,
      breed: 'rrrrrrrrrr',
      name: 'ben',
    },
    {
      age: 4,
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

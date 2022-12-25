import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Cat } from './cat.entity';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { repositoryMockFactory } from './cats.service.spec';

describe('CatsController', () => {
  let controller: CatsController;
  let catsService: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [
        CatsService,
        { provide: getRepositoryToken(Cat), useFactory: repositoryMockFactory },
      ],
    }).compile();

    catsService = module.get<CatsService>(CatsService);
    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

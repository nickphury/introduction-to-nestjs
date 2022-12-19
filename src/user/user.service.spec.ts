import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { userRepositoryMockFactory } from './user.controller.spec';
import { User } from './user.entity';
import { UserService } from './user.service';

// @ts-ignore
export const dataSourceMockFactory: () => User<DataSource> = jest.fn(() => ({
  createQueryRunner: jest.fn(),
}));

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useFactory: userRepositoryMockFactory,
        },
        {
          provide: DataSource,
          useFactory: dataSourceMockFactory,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

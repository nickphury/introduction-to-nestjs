import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { repositoryUsersMockFactory } from './../users/users.service.spec';
import { UsersEntity } from './../users/users.entity';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { UsersService } from './../users/users.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        LocalStrategy,
        {
          provide: getRepositoryToken(UsersEntity),
          useFactory: repositoryUsersMockFactory,
        },
        UsersService,
        JwtService,
      ],
      imports: [PassportModule],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

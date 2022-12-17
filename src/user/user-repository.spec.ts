import { DataSource } from 'typeorm';
import { UserRepository } from './user-repository';

describe('UserRepository', () => {
  it('should be defined', () => {
    expect(new UserRepository(new DataSource({ type: 'mysql' }))).toBeDefined();
  });
});

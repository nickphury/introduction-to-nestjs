import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleDto } from './role.dto';
import { Role } from './role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) {}

  create(role: RoleDto): Promise<any> {
    return this.roleRepository.save(this.roleRepository.create(role));
  }

  findAll(): Promise<Role[]> {
    return this.roleRepository.find({ loadEagerRelations: false });
  }

  findByName(name: string): Promise<Role> {
    return this.roleRepository.findOne({
      where: { name },
      loadEagerRelations: false,
    });
  }

  findById(id: string): Promise<Role> {
    return this.roleRepository.findOne({
      where: { id },
      loadEagerRelations: false,
    });
  }
}

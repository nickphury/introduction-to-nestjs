import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { Roles } from '../decorators/roles.decorator';
import { RoleDto } from './role.dto';
import { RoleService } from './role.service';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @Roles('admin')
  async create(@Body() role: RoleDto) {
    return await this.roleService.create(role);
  }

  @Get()
  async findAll() {
    return await this.roleService.findAll();
  }

  @Get(':name')
  async findByName(@Param('name') name: string) {
    return await this.roleService.findByName(name);
  }

  @Get('id/:uuid')
  async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return await this.roleService.findById(uuid);
  }
}

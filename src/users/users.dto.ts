import { IsOptional, IsString } from 'class-validator';
import { RoleDto } from '../role/role.dto';

export class UsersDto {
  @IsString()
  username: string;
  @IsString()
  password: string;
  @IsOptional()
  roles: RoleDto[];
}

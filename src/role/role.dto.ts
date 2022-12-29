import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RoleDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsOptional()
  description: string;
}

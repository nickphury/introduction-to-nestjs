import { IsString } from 'class-validator';

export class UsersDto {
  @IsString()
  username: string;
  @IsString()
  password: string;
}

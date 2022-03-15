import { IsInt, IsString } from 'class-validator';
import { UserDao } from 'src/user/interfaces/user.interface';

export class CatDto {
  @IsString()
  name: string;
  @IsInt()
  age: number;
  @IsString()
  breed: string;
  user: UserDao;
}

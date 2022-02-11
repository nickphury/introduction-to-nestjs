import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { CatDto } from 'src/cats/dto/create-cat.dto';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    console.warn('object : ', metatype);
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }

  private toValidate(metatype: unknown): boolean {
    const types: unknown[] = [CatDto];
    return !types.includes(metatype);
  }
}

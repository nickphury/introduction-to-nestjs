import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserDao } from 'src/user/interfaces/user.interface';

export const User = createParamDecorator<UserDao | string>(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    return data ? user?.[data] : user;
  },
);

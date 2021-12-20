import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import dotenv = require('dotenv');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransformInterceptor());
  dotenv.config();
  const port = process.env.PORT;
  console.warn('APP runing on port : ', port);
  await app.listen(port);
}
bootstrap();

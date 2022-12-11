import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import dotenv = require('dotenv');
import { ValidationPipe } from '@nestjs/common';
import { MyLoggerService } from './services/my-logger/my-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.useLogger(app.get(MyLoggerService));
  dotenv.config();
  const port = process.env.PORT || 3000;
  console.warn('APP runing on port : ', port);
  await app.listen(port);
}
bootstrap();

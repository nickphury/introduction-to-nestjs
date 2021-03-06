import {
  CacheModule,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { ConfigModule } from './services/config/config.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import * as redisStore from 'cache-manager-redis-store';
@Module({
  imports: [
    CatsModule,
    UserModule,
    ConfigModule,
    TypeOrmModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
      max: 10,
      store: redisStore,
      socket: {
        host: process.env.HOST,
        port: process.env.CACHE_STORE_PORT,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST },
        'cats/(.*)',
      )
      .forRoutes(CatsController, UserController);
  }
}

import { ConsoleLogger, Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class MyLoggerService extends ConsoleLogger implements LoggerService {
  error(message: any, stack?: string, context?: string): void {
    super.error(message);
  }
}

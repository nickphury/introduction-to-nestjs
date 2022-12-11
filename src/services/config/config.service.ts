import { Inject, Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import path from 'path';
import { CONFIG_OPTIONS } from '../../constants/config';
import { EnvConfig } from './interfaces';

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject(CONFIG_OPTIONS) private options: any) {
    if (options.folder) {
      const filePath = `${process.env.NODE_ENV || 'development'}.env`;
      const envFile = path.resolve(
        __dirname,
        '../../',
        this.options.folder,
        filePath,
      );
      this.envConfig = dotenv.parse(fs.readFileSync(envFile));
    }
  }

  public get(key: string): string {
    return this.envConfig[key];
  }
}

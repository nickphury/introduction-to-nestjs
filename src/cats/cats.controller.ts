import {
  Body,
  CACHE_MANAGER,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CatsService } from 'src/cats/cats.service';
import { CatDto } from 'src/cats/dto/cat.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@Controller('cats')
//@UseGuards(RolesGuard)
//@UseInterceptors(LoggingInterceptor)
export class CatsController {
  constructor(
    private catsService: CatsService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Post()
  async create(@Body(/*new ValidationPipe()*/) cat: CatDto) {
    console.warn(cat);
    return await this.catsService.create(cat);
  }

  @Get()
  async findAll() {
    let cats: CatDto[] = null;
    try {
      cats = await this.cacheManager.get<CatDto[]>(process.env.CACHE_CATS);
      console.warn(`from ${!cats ? 'database' : 'cache'}`);
      if (!cats) {
        cats = await this.catsService.findAll();
        await this.cacheManager.set(process.env.CACHE_CATS, cats, {
          ttl: parseInt(process.env.CACHE_TTL, 10),
        });
      }
    } catch (error) {
      console.log('[Big Problemo CatsController] : ', error);
      throw error;
    }
    return cats;
  }

  @Get(':uuid')
  async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return this.catsService.findOne(uuid);
  }

  @Delete(':uuid')
  async delete(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return this.catsService.delete(uuid);
  }
}

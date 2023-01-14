import { IGDBModule } from '@batch/infra/service/igdb/igdb.module';
import { ExceptionsModule } from '@common/infra/services/exceptions/exceptions.module';
import { LoggerModule } from '@common/infra/services/logger/logger.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    LoggerModule,
    ExceptionsModule,
    IGDBModule,
  ],
  providers: [],
})
export class AppModule {}

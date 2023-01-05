import { ExceptionsModule } from '@common/infra/services/exceptions/exceptions.module';
import { LoggerModule } from '@common/infra/services/logger/logger.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [LoggerModule, ExceptionsModule],
  providers: [],
})
export class AppModule {}

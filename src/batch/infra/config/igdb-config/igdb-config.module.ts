import { Module } from '@nestjs/common';
import { IGDBConfigService } from './igdb-config.service';

@Module({
  providers: [IGDBConfigService],
  exports: [IGDBConfigService],
})
export class IGDBConfigModule {}

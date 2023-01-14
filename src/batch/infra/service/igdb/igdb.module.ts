import { IGDB_BASEURL } from '@batch/domain/constants/igdb-endpoint';
import { IGDBConfigModule } from '@batch/infra/config/igdb-config/igdb-config.module';
import { IGDBConfigService } from '@batch/infra/config/igdb-config/igdb-config.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { IGDBService } from './igdb.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [IGDBConfigModule],
      useFactory: async (config: IGDBConfigService) => ({
        timeout: 5000,
        maxRedirects: 5,
        baseURL: IGDB_BASEURL,
        headers: {
          'Accept-Encoding': '*',
          'Client-ID': config.getClientId(),
          Accept: 'application/json',
          'Content-Type': 'text/plain',
        },
      }),
      inject: [IGDBConfigService],
    }),
    IGDBConfigModule,
  ],
  providers: [IGDBService],
  exports: [IGDBService],
})
export class IGDBModule {}

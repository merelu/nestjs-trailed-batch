import { IGDBConfig } from '@batch/domain/config/igdb.interface';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class IGDBConfigService implements IGDBConfig {
  constructor(private configService: ConfigService) {}

  getClientId(): string {
    const result = this.configService.get<string>('IGDB_CLIENT_ID');

    if (!result) {
      throw Error('NEED ENV IGDB_CLIENT_ID');
    }

    return result;
  }
  getClientSecret(): string {
    const result = this.configService.get<string>('IGDB_CLIENT_SECRET');

    if (!result) {
      throw Error('NEED ENV IGDB_CLIENT_SECRET');
    }
    return result;
  }
}

import {
  IGDB_AUTH_URL,
  IGDB_ENDPOINT,
} from '@batch/domain/constants/igdb-endpoint';
import { IGDBConfigService } from '@batch/infra/config/igdb-config/igdb-config.service';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IGDBService {
  constructor(
    private readonly httpService: HttpService,
    private readonly config: IGDBConfigService,
  ) {}

  async getGames(query: string) {
    const result = await this.httpService.post(IGDB_ENDPOINT.GAMES, {});
  }

  async getToken() {
    const result = await this.httpService.post('/token', undefined, {
      baseURL: IGDB_AUTH_URL,
      params: {
        client_id: this.config.getClientId(),
        client_secret: this.config.getClientSecret(),
        grant_type: 'client_credentials',
      },
    });
    return result;
  }
}

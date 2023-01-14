import { Test } from '@nestjs/testing';
import { IGDBService } from './igdb.service';

describe('igdbService', () => {
  let igdbService: IGDBService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [IGDBService],
    }).compile();

    igdbService = moduleRef.get<IGDBService>(IGDBService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = {};
      jest.spyOn(igdbService, 'getToken').mockImplementation(() => result);

      expect(await catsController.findAll()).toBe(result);
    });
  });
});

import IndexController from './index.controller';
import IndexService from './index.service';
import IndexModule from './index.module';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PeoplecountTotalcount } from 'src/entities/PeoplecountTotalcount';
import { PeoplecountTrafficcount } from 'src/entities/PeoplecountTrafficcount';
import { TypeOrmModule } from '@nestjs/typeorm';


describe('TrafficCountController', () => {
  let controller: IndexController;
  let service: IndexService;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [IndexController],
      providers: [
        {
          provide: IndexService,
          useValue: {
            findAll: jest.fn(() => new Promise<PeoplecountTrafficcount[]>((resolve, reject) => {
              resolve([])
            }))
          }
        }
      ]
    }).compile();

    controller = moduleRef.get(IndexController);
    service = moduleRef.get(IndexService);
  });

  describe('findAll', () => {
    it('should return array', async () => {
      const result = new Promise<PeoplecountTrafficcount[]>((resolve, reject) => {
        resolve([])
      });

      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect((await controller.findAll({})).length).toBeGreaterThanOrEqual(0);
    });
  });
});
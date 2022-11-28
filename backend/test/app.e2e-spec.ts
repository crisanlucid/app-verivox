import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET) CONSUMPTION 3500 kWh', async () => {
    const res = await request(app.getHttpServer())
      .get('/products?consumption=3500&order=desc')
      .send();

    const [productA, productB] = res.body;
    expect(res.status).toBe(200);
    expect(res.body.length).toEqual(2);
    expect(productA.annualCost).toBe(830);
    expect(productB.annualCost).toBe(800);
  });
  it('/ (GET) CONSUMPTION 4500 kWh', async () => {
    const res = await request(app.getHttpServer())
      .get('/products?consumption=4500&order=desc')
      .send();

    const [productA, productB] = res.body;
    expect(res.status).toBe(200);
    expect(res.body.length).toEqual(2);
    expect(productA.annualCost).toBe(1050);
    expect(productB.annualCost).toBe(950);
  });
  it('/ (GET) CONSUMPTION 6000 kWh', async () => {
    const res = await request(app.getHttpServer())
      .get('/products?consumption=6000&order=desc')
      .send();

    const [productA, productB] = res.body;
    expect(res.status).toBe(200);
    expect(res.body.length).toEqual(2);
    expect(productA.annualCost).toBe(1400);
    expect(productB.annualCost).toBe(1380);
  });
});

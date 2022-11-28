import { Test, TestingModule } from '@nestjs/testing';
import { PromoTypeAService } from './productsPromoA.service';

describe('PromoTypeAService', () => {
  let service: PromoTypeAService;
  let comsumption: number;
  let totalCost: number;
  const itemPromo = {
    id: 1,
    name: 'basic electricity tariff',
    annualCost: 0,
    currency: 'Eur',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PromoTypeAService],
    }).compile();

    service = module.get<PromoTypeAService>(PromoTypeAService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have the input 3500 kWh/year and output 830 Eur ', () => {
    comsumption = 3500;
    totalCost = 830;

    const itemPromoExpect = {
      ...itemPromo,
      annualCost: totalCost,
    };

    expect(service.calculatePromo(comsumption)).toStrictEqual(itemPromoExpect);
  });

  it('should have the input 4500 kWh/year and output 1050 Eur ', () => {
    comsumption = 4500;
    totalCost = 1050;

    const itemPromoExpect = {
      ...itemPromo,
      annualCost: totalCost,
    };

    expect(service.calculatePromo(comsumption)).toStrictEqual(itemPromoExpect);
  });
  it('should have the input 6000 kWh/year and output 1380 Eur ', () => {
    comsumption = 6000;
    totalCost = 1380;

    const itemPromoExpect = {
      ...itemPromo,
      annualCost: totalCost,
    };

    expect(service.calculatePromo(comsumption)).toStrictEqual(itemPromoExpect);
  });
});

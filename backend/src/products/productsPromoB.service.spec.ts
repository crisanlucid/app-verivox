import { Test, TestingModule } from '@nestjs/testing';
import { PromoTypeBService } from './productsPromoB.service';

describe('PromoTypeBService', () => {
  let service: PromoTypeBService;
  let comsumption: number;
  let totalCost: number;
  const itemPromo = {
    id: 2,
    name: 'Package tariff',
    annualCost: 0,
    currency: 'Eur',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PromoTypeBService],
    }).compile();

    service = module.get<PromoTypeBService>(PromoTypeBService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have the input 3500 kWh/year and output 800 Eur ', () => {
    comsumption = 3500;
    totalCost = 800;

    const itemPromoExpect = {
      ...itemPromo,
      annualCost: totalCost,
    };

    expect(service.calculatePromo(comsumption)).toStrictEqual(itemPromoExpect);
  });

  it('should have the input 4500 kWh/year and output 950 Eur ', () => {
    comsumption = 4500;
    totalCost = 950;

    const itemPromoExpect = {
      ...itemPromo,
      annualCost: totalCost,
    };

    expect(service.calculatePromo(comsumption)).toStrictEqual(itemPromoExpect);
  });
  it('should have the input 6000 kWh/year and output 1400 Eur ', () => {
    comsumption = 6000;
    totalCost = 1400;

    const itemPromoExpect = {
      ...itemPromo,
      annualCost: totalCost,
    };

    expect(service.calculatePromo(comsumption)).toStrictEqual(itemPromoExpect);
  });
});

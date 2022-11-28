import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { PromoTypeAService } from './productsPromoA.service';
import { PromoTypeBService } from './productsPromoB.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: PromoTypeAService,
          useValue: {
            calculatePromo: jest.fn(),
          },
        },
        {
          provide: PromoTypeBService,
          useValue: {
            calculatePromo: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

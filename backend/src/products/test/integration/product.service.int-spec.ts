import { Test } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { GetProductsFilterDto, orderType } from 'src/products/dto';
import { ProductsService } from 'src/products/products.service';

describe('ProductService Integration', () => {
  let service: ProductsService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    service = moduleRef.get(ProductsService);
  });
  describe('findAllByConsumption', () => {
    it('should return 2 promotion products', async () => {
      const mockFilter: GetProductsFilterDto = {
        consumption: '3500',
        order: orderType.ASC,
      };
      const response = await service.findAllByConsumption(mockFilter);

      expect(response).toHaveLength(2);
      expect(response[0].annualCost).toBe(830);
      expect(response[1].annualCost).toBe(800);
    });
  });
});

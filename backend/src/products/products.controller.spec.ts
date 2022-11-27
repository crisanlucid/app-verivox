import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of products', async () => {
    const result = [
      {
        id: 1,
        name: 'basic electricity tariff',
        annualCost: 770,
        currency: 'Eur',
      },
    ];
    jest
      .spyOn(service, 'findAllByConsumption')
      .mockImplementation(() => result);

    expect(await controller.findAllByConsumption()).toBe(result);
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { GetProductsFilterDto, orderType } from './dto';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        ProductsService,
        {
          provide: ProductsService,
          useValue: {
            findAllByConsumption: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined(); //
  });

  it('should return an array of products', async () => {
    const result = async () => [
      {
        id: 1,
        name: 'basic electricity tariff',
        annualCost: 770,
        currency: 'Eur',
      },
    ];
    const mockFilter: GetProductsFilterDto = {
      consumption: '1222',
      order: orderType.ASC,
    };
    jest
      .spyOn(service, 'findAllByConsumption')
      .mockImplementation(() => result());

    const response = await controller.findAllByConsumption(mockFilter);

    expect(response).toStrictEqual(await result());
  });
});

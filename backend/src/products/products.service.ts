import { Injectable } from '@nestjs/common';
import { GetProductsFilterDto, IProduct } from './dto';
import { PromoTypeAService } from './productsPromoA.service';
import { PromoTypeBService } from './productsPromoB.service';

const productsMock = [
  {
    id: 1,
    name: 'basic electricity tariff',
    annualCost: 770,
    currency: 'Eur',
  },
  {
    id: 2,
    name: 'Package tariff',
    annualCost: 800,
    currency: 'Eur',
  },
];

@Injectable()
export class ProductsService {
  constructor(
    private readonly promotionServiceA: PromoTypeAService,
    private readonly promotionsServiceB: PromoTypeBService,
  ) {}
  async findAllByConsumption(
    filterDto: GetProductsFilterDto,
  ): Promise<IProduct[]> {
    //get filter comsumption
    const { consumption } = filterDto;
    //getPromotionServiceA
    const getPromotionServiceA = await this.promotionServiceA.calculatePromo(
      Number(consumption),
    );
    //getPromotionsServiceB
    const getPromotionsServiceB = await this.promotionsServiceB.calculatePromo(
      Number(consumption),
    );
    //merge result
    return [getPromotionServiceA, getPromotionsServiceB];
    // return [...productsMock];
  }

  findAll(): IProduct[] {
    return [...productsMock];
  }
}

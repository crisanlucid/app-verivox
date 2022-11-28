import { Injectable } from '@nestjs/common';
import { GetProductsFilterDto, IProduct, orderType } from './dto';
import { PromoTypeAService } from './productsPromoA.service';
import { PromoTypeBService } from './productsPromoB.service';

const productsMock = [
  {
    id: 1,
    name: '[mock]basic electricity tariff',
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
    const { consumption, order } = filterDto;
    //getPromotionServiceA
    const getPromotionServiceA = await this.promotionServiceA.calculatePromo(
      Number(consumption),
    );
    //getPromotionsServiceB
    const getPromotionsServiceB = await this.promotionsServiceB.calculatePromo(
      Number(consumption),
    );
    //merge result
    const res = [getPromotionServiceA, getPromotionsServiceB];

    return this.orderBy(res, order);
  }

  async findAll(filterDto: GetProductsFilterDto): Promise<IProduct[]> {
    const { order } = filterDto;
    return this.orderBy([...productsMock], order);
  }

  orderBy(listProduct, order): IProduct[] {
    if (order === orderType.ASC) {
      return listProduct.sort((first, next) =>
        first.annualCost > next.annualCost ? 1 : -1,
      );
    }
    if (order === orderType.DESC) {
      return listProduct.sort((first, next) =>
        first.annualCost > next.annualCost ? -1 : 1,
      );
    }

    return listProduct;
  }
}

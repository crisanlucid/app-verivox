import { Injectable } from '@nestjs/common';
import { IProduct } from './dto';
import { IPromotion } from './products.interface';

@Injectable()
export class PromoTypeBService implements IPromotion {
  calculatePromo(no: number): IProduct {
    return {
      id: 2,
      name: 'Package tariff',
      annualCost: 800,
      currency: 'Eur',
    };
  }
}

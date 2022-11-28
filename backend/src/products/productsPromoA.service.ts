import { Injectable } from '@nestjs/common';
import { IProduct } from './dto';
import { IPromotion } from './products.interface';

@Injectable()
export class PromoTypeAService implements IPromotion {
  calculatePromo(no: number): IProduct {
    return {
      id: 1,
      name: 'basic electricity tariff',
      annualCost: 770,
      currency: 'Eur',
    };
  }
}

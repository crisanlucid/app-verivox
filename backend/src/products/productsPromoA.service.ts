import { Injectable } from '@nestjs/common';
import { IProduct } from './dto';
import { IPromotion } from './products.interface';

@Injectable()
export class PromoTypeAService implements IPromotion {
  private base_subscription = 5;
  private number_months = 12;
  private price_kWh_cent = 22;

  convertToEuro(c: number, cent: number) {
    return (c * cent) / 100;
  }

  calculatePromo(comsumptionYear: number): IProduct {
    const { base_subscription, number_months, price_kWh_cent } = this;
    const base_cost = (base_subscription * number_months) as number;
    const annualCost =
      base_cost + this.convertToEuro(comsumptionYear, price_kWh_cent);

    return {
      id: 1,
      name: 'basic electricity tariff',
      annualCost,
      currency: 'Eur',
    };
  }
}

import { Injectable } from '@nestjs/common';
import { IProduct } from './dto';
import { IPromotion } from './products.interface';

@Injectable()
export class PromoTypeBService implements IPromotion {
  private base_subscription = 800;
  private price_kWh_cent = 30;
  private maxLimitKiloWatz = 4000;

  convertToEuro(c: number, cent: number) {
    return (c * cent) / 100;
  }

  calculatePromo(comsumptionYear: number): IProduct {
    const { base_subscription, price_kWh_cent, maxLimitKiloWatz } = this;
    const base_cost = base_subscription;
    let annualCost = 0;

    if (comsumptionYear <= maxLimitKiloWatz) {
      annualCost = base_subscription;
    } else {
      const restComsumptionYear = comsumptionYear - maxLimitKiloWatz;
      annualCost =
        base_cost + this.convertToEuro(restComsumptionYear, price_kWh_cent);
    }

    return {
      id: 2,
      name: 'Package tariff',
      annualCost,
      currency: 'Eur',
    };
  }
}

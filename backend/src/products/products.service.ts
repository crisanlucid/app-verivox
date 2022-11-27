import { Injectable } from '@nestjs/common';

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
  findAllByConsumption() {
    return [...productsMock];
  }
}

import { IProduct } from './dto';

export interface IPromotion {
  calculatePromo: (n: number) => IProduct;
}

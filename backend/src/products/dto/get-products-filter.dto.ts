export enum orderType {
  ASC = 'asc',
  DESC = 'desc',
}

export class GetProductsFilterDto {
  consumption: string;
  order: orderType;
}

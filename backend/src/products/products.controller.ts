import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async findAllByConsumption(): Promise<any[]> {
    return this.productsService.findAllByConsumption();
  }
}

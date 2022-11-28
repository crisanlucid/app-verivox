import { Controller, Get, Query } from '@nestjs/common';
import { GetProductsFilterDto, IProduct } from './dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async findAllByConsumption(
    @Query()
    filterDto: GetProductsFilterDto,
  ): Promise<IProduct[]> {
    console.log({
      filterDto,
    });

    if (filterDto?.consumption) {
      return this.productsService.findAllByConsumption(filterDto);
    }

    return this.productsService.findAll(filterDto);
  }
}

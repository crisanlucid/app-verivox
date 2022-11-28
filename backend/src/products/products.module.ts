import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { PromoTypeAService } from './productsPromoA.service';
import { PromoTypeBService } from './productsPromoB.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PromoTypeBService, PromoTypeAService],
})
export class ProductsModule {}

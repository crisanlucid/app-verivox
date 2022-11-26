import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, ConfigModule.forRoot()],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsController } from './controllers/product.controller';
import { ProductsService } from './services/product.service';
import { ProductResolver } from './resolvers/product.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductsService, ProductResolver],
  controllers: [ProductsController],
})
export class ProductsModule {}

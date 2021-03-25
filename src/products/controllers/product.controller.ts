import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateProductDTO } from '../dto/product.dto';
import { Product } from '../entities/product.entity';
import { ProductsService } from '../services/product.service';

@Controller('product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // Get Products /product/list
  @Get('/list')
  async getProducts(@Res() res): Promise<Product[]> {
    const products = await this.productsService.findAllProducts();
    return res.status(HttpStatus.OK).json(products);
  }

  // Get single product: /product/605ab8372ed8db2ad4839d87
  @Get(':id')
  async getOneProduct(@Res() res, @Param('id') id: string): Promise<Product> {
    const product = await this.productsService.findOneProduct(id);
    return res.status(HttpStatus.OK).json(product);
  }

  // Add Product: /product
  @Post()
  async createProduct(
    @Res() res,
    @Body() createProductDTO: CreateProductDTO,
  ): Promise<Product> {
    const product = await this.productsService.createProduct(createProductDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Product Successfully Created',
      product,
    });
  }

  // Update Product: /product/605ab8372ed8db2ad4839d87
  @Put(':id')
  async updateProduct(
    @Res() res,
    @Param('id') id: string,
    @Body() createProductDTO: CreateProductDTO,
  ): Promise<Product> {
    const productUpdated = await this.productsService.updateProduct(
      id,
      createProductDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Product Updated Successfully',
      productUpdated,
    });
  }

  // Delete Product: /product/605ab8372ed8db2ad4839d87
  @Delete(':id')
  async deleteProduct(@Res() res, @Param('id') id: string): Promise<Boolean> {
    const productDeleted = await this.productsService.deleteProduct(id);
    return res.status(HttpStatus.OK).json({
      message: 'Product Deleted Successfully',
      productDeleted,
    });
  }
}

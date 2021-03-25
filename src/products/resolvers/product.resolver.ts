import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ProductsService } from '../services/product.service';
import { CreateProductDTO } from './../dto/product.dto';
import { InputProduct } from '../inputs/product.input';

@Resolver(() => CreateProductDTO)
export class ProductResolver {
  constructor(private readonly productService: ProductsService) {}

  //Test
  @Query(() => String)
  hello() {
    return 'Hello World';
  }

  //query Get Products Graphql
  @Query(() => [CreateProductDTO])
  async getProducts(): Promise<CreateProductDTO[]> {
    return await this.productService.findAllProducts();
  }

  //query Get Product Graphql
  @Query(() => CreateProductDTO)
  async getProduct(@Args('id') id: string): Promise<CreateProductDTO> {
    return await this.productService.findOneProduct(id);
  }

  //mutation Create Product Graphql
  @Mutation(() => CreateProductDTO)
  async createProduct(
    @Args('inputProduct') inputProduct: InputProduct,
  ): Promise<CreateProductDTO> {
    return await this.productService.createProduct(inputProduct);
  }

  //mutation Update Product Graphql
  @Mutation(() => CreateProductDTO)
  async updateProduct(
    @Args('id') id: string,
    @Args('inputProduct') inputProduct: InputProduct,
  ): Promise<CreateProductDTO> {
    return await this.productService.updateProduct(id, inputProduct);
  }

  //mutation Delete Product Graphql
  @Mutation(() => Boolean)
  async deleteProduct(@Args('id') id: string): Promise<Boolean> {
    return await this.productService.deleteProduct(id);
  }
}

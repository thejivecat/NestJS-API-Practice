import { 
  Controller, 
  Post, 
  Get, 
  Body, 
  Param, 
  Patch, 
  Delete 
} from '@nestjs/common'

import { ProductsService } from './products.service'

//Crud Operations for /products

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post() //post request decorator
  addProduct(
  @Body('title') prodTitle: string, 
  @Body('description') prodDesc: string, 
  @Body('price') prodPrice: number
  ): any {
    const generatedId = this.productsService.addProduct(
      prodTitle, 
      prodDesc, 
      prodPrice
  );
    return {id: generatedId}
  }

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
    ) {
      this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
      return null;
  }
  
  @Delete(':id')
  removeProduct(@Param('id') prodId: string) {
    this.productsService.deleteProduct(prodId);
    return null;
  }
}
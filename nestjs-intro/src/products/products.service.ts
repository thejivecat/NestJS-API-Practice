import { Injectable, NotFoundException } from '@nestjs/common'

import { Product } from './product.model'

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  addProduct(title: string, description: string, price: number) {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, description, price);
    this.products.push(newProduct);
    return prodId;
  }

  getAllProducts() {
    return [...this.products]; //return a copy so we can't edit products without a built-in method
  }
  getSingleProduct(productId: string) {
    const product = this.findProduct(productId)[0];
    
    return {...product}; //again, making a copy
  }
  updateProduct(prodId: string, prodTitle: string, prodDesc: string, prodPrice: number) {
    const [product, index] = this.findProduct(prodId);
    const updatedProduct = {...product};
    if (prodTitle) {
      updatedProduct.title = prodTitle;
    }
    if (prodDesc) {
      updatedProduct.description = prodDesc;
    }
    if (prodPrice) {
      updatedProduct.price = prodPrice;
    }
    this.products[index] = updatedProduct;
  }

  deleteProduct(prodId: string) {
    const index = this.findProduct(prodId)[1];
    this.products.splice(index, 1);
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex((prod => prod.id === id));
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('Could not find product'); //nest auto sends a 404 response with custom message
    }
    return [product, productIndex];
  }
}
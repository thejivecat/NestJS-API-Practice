import { Module } from '@nestjs/common'

import { ProductsController } from './products.controller'
import { ProductsService } from './products.service'

@Module({
  controllers: [ProductsController],
  providers: [ProductsService]
})

export class ProductsModule {}

//ties together Products Controller and Products Service
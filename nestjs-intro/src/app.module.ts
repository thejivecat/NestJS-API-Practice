import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module'

@Module({
  imports: [ProductsModule], //can import other modules into this module
  controllers: [AppController], //control how you handle incoming requests, responsible for accepting requests and sending back responses
  providers: [AppService], //extra services/classes that can provide certain functionalities (such as reaching out to databases and retrieving info))
})
export class AppModule {} //bundles the controllers and providers and exports the entire module, typically split by feature

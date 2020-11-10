import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //by default, handles request to index of your website, add an input to @Controller() to define the path (e.g. @Controller('users'))
export class AppController {
  constructor(private readonly appService: AppService) {} //nest creates instances of AppController w/ argument of appService of type AppService (which is a provider)

  @Get() //gets all requests to the path provided to controller, or you can pass additional input(e.g. @Get('products') to access domain/products/users)
  @Header('Content-Type', 'text/html') //can set custom headers on response
  getHello(): string {
    return this.appService.getHello(); //can set any response and nest will automatically set headers for response
  }
}

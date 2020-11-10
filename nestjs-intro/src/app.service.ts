import { Injectable } from '@nestjs/common';

//here you can have database logic, etc.
//do the heavy lifting here

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!'; 
  }
}

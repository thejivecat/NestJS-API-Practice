//Entry point of application

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // similar to const app = express()
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProductNotFound } from './products/filters/product-not-found.filter';
import { ProductAlreadyExistFilter } from './products/filters/product-exists.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ProductNotFound(), new ProductAlreadyExistFilter());

  app.enableCors();
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();

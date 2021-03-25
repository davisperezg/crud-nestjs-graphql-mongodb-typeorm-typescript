import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  const logger = new Logger('Bootstrap');
  await app.listen(port);
  logger.verbose(`This server is running on port ${port}`);
}
bootstrap();

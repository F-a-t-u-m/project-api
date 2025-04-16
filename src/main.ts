import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Main', { timestamp: true });
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  await app.listen(process.env.PORT ?? port, '0.0.0.0');
  logger.log(`Application listening on port ${port}`);
}
bootstrap();

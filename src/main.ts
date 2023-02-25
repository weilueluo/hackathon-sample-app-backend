import { ConsoleLogger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const port = 3000;
  const boostrapLogger = new ConsoleLogger('BootstrapLogger');
  boostrapLogger.log(`Hackathon backend listening on port: ${port}`);
  await app.listen(port);
}
bootstrap();

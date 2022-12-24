import { NestFactory } from '@nestjs/core';
import cors from 'cors';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useStaticAssets(join(__dirname, '..', 'public'));
  
  await app.listen(4116);
}
bootstrap();

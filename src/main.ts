import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // AppModule 은 모든 것의 루트 모듈 같은 거임
  // 모듈은 어플리케이션의 일부분
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

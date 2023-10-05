import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// NOTE: @데코레이터. 클래스 위의 함수이고, 클래스를 위 움직인다.
@Module({
  imports: [],
  controllers: [AppController],
  // controllers가 하는 일? 일반적으로 url을 가져오고, 함수를 실행하는것
  providers: [AppService],
})
export class AppModule {}

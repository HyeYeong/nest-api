import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// NOTE: @데코레이터. 클래스 위의 함수이고, 클래스를 위 움직인다.
// NOTE: nest는 controller와 비지니스로직을 구분하고 싶어한다.
@Module({
  imports: [],
  controllers: [AppController],
  // controllers가 하는 일? 일반적으로 url을 가져오고, 함수를 실행하는것 router같은 존재.
  // service는 실재로 function을 가지는 부분(비지니스 로직을 실행하는 역할)
  providers: [AppService],
})
export class AppModule {}

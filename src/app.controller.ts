import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Controller는 url로의 요청을 받는다.
  @Get('/hello')
  sayHello(): string {
    return this.appService.sayHello();
  }

  @Post('/examplepost')
  postHello(): string {
    return this.appService.postHello();
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World-!';
  }

  sayHello(): string {
    return 'Hello sayHello';
  }

  postHello(): string {
    return 'Hello postHello';
  }
}

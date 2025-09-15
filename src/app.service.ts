import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'NestJS!';
  }

  postHello() {
    return "Desde @Post desde el servicio"
  }

  
}

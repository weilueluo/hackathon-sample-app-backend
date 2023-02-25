import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(clicks: number): object {
    return {
      message: `Hello from backend! Clicks: ${clicks}`,
    };
  }
}

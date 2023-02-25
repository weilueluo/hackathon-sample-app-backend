import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/clicks/:clicks')
  getHello(@Param('clicks', new ParseIntPipe()) clicks: number): object {
    return this.appService.getHello(clicks);
  }
}

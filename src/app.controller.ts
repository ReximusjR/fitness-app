import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// We can ignore this, or just treat it like a "health check to the api"
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

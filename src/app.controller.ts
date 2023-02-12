import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('home')
  homepage() {
    return this.appService.homepage();
  }

  @Get('/search')
  @Render('search')
  search(@Query('keyword') keyword: string) {
    this.appService.search(keyword);
  }
}

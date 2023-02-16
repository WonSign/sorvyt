import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('home')
  async homepage() {
    return this.appService.homepage();
  }

  @Get('/search')
  @Render('search')
  async search(@Query('keyword') keyword: string) {
    const channelInfo = this.appService.getChannelInfo(keyword);
    return {
      keyword: keyword,
      channelProfile: (await channelInfo).snippet.title,
      channelName: (await channelInfo).snippet.thumbnails.medium.url,
      channelId: (await channelInfo).snippet.channelId,
    };
  }

  @Get('/result')
  @Render('result')
  async result(@Query('channelId') channelId: string) {
    this.appService.getVideos(channelId);
  }
}

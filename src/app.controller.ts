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
  async search(@Query('keyword') keyword: string): Promise<any> {
    const channelInfo = await this.appService.getChannelInfo(keyword);
    return {
      keyword: keyword,
      channelInfo: channelInfo.map((item) => ({
        channelProfile: item.snippet.thumbnails.medium.url,
        channelName: item.snippet.title,
        channelId: item.snippet.channelId,
      })),
    };
  }

  @Get('/result')
  @Render('result')
  async result(@Query('channelId') channelId: string) {
    this.appService.getVideos(channelId);
  }
}

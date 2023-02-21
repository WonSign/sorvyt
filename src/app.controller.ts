import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('home')
  async homepage() {
    return;
  }

  @Get('/search')
  @Render('search')
  async search(@Query('keyword') keyword: string) {
    const channelInfo = await this.appService.getChannelInfo(keyword);
    return {
      keyword: keyword,
      channelInfo: channelInfo.map((item) => ({
        channelProfile: item.snippet.thumbnails.default.url,
        channelName: item.snippet.title,
        channelId: item.snippet.channelId,
      })),
    };
  }

  @Get('/result')
  @Render('result')
  async result(
    @Query('channelId') channelId: string,
    @Query('order') order: string,
  ) {
    const videos = await this.appService.getVideos(channelId, order);
    return {
      channelId: channelId,
      order: order,
      videos: videos.map((item) => ({
        channelName: item.snippet.channelTitle,
        videoId: item.id.videoId,
      })),
    };
  }
}

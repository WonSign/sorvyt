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
      channelName: videos[0].snippet.channelTitle,
      videos: videos.map((item) => ({
        videoId: item.id.videoId,
        thumbnail: item.snippet.thumbnails.medium.url,
        title: item.snippet.title,
      })),
    };
  }
}

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  datas = [];
  result = [];

  async homepage() {
    return;
  }

  async search(keyword) {
    this.getChannelInfo(keyword);
  }

  async getChannelInfo(keyword) {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${keyword}&maxResults=10&key=${process.env.YOUTUBE_API_KEY}`;
    const { data } = await firstValueFrom(this.httpService.get(url));
    const channelId = data.items[0].id.channelId;
    const channelName = data.items[0].snippet.title;
    const channelProfile = data.items[0].snippet.thumbnails.medium.url;
    this.datas = [channelId, channelName, channelProfile];
  }

  async getVideos(channelId) {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`;
    const { data } = await firstValueFrom(this.httpService.get(url));
    this.result = data;
  }
}

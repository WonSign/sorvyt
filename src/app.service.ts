import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async homepage() {
    return;
  }

  async getChannelInfo(keyword: string) {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${keyword}&maxResults=10&key=${process.env.YOUTUBE_API_KEY}`;
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data.items;
  }

  async getVideos(channelId: string) {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`;
    const { data } = await firstValueFrom(this.httpService.get(url));
    const result = data;
    console.log(result);
  }
}

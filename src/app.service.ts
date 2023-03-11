import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getChannelInfo(keyword: string) {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=channel&maxResults=10&q=${keyword}&key=${process.env.YOUTUBE_API_KEY}`;
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data.items;
  }

  async getVideos(channelId: string, order: string) {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&order=${order}&maxResults=50&channelId=${channelId}&key=${process.env.YOUTUBE_API_KEY}`;
    const { data } = await firstValueFrom(this.httpService.get(url));
    return data.items;
  }
}

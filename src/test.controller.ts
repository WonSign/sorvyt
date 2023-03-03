import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class TestController {
  @Get('/test')
  @Render('home')
  async testHomepage() {
    return;
  }

  @Get('/test/search')
  @Render('search')
  async testSearch() {
    return {
      keyword: 'keyword',
      channelInfo: [
        {
          channelProfile:
            'https://yt3.ggpht.com/ytc/AL5GRJVjZNEeZ9ik0iDUXhbAnYLCiVKP-oICbe7Wzp6e=s176-c-k-c0x00ffffff-no-rj',
          channelName: '채널 이름이 뒤지게 길다 마치 나의 (이하 생략)',
          channelId: 'UCEfQQoxrwg_6O2UBjElwFsQ',
        },
        {
          channelProfile:
            'https://yt3.ggpht.com/ytc/AL5GRJVjZNEeZ9ik0iDUXhbAnYLCiVKP-oICbe7Wzp6e=s176-c-k-c0x00ffffff-no-rj',
          channelName: '채널 이름이 뒤지게 길다 마치 나의 (이하 생략)',
          channelId: 'UCEfQQoxrwg_6O2UBjElwFsQ',
        },
        {
          channelProfile:
            'https://yt3.ggpht.com/ytc/AL5GRJVjZNEeZ9ik0iDUXhbAnYLCiVKP-oICbe7Wzp6e=s176-c-k-c0x00ffffff-no-rj',
          channelName: '채널 이름이 뒤지게 길다 마치 나의 (이하 생략)',
          channelId: 'UCEfQQoxrwg_6O2UBjElwFsQ',
        },
        {
          channelProfile:
            'https://yt3.ggpht.com/ytc/AL5GRJVjZNEeZ9ik0iDUXhbAnYLCiVKP-oICbe7Wzp6e=s176-c-k-c0x00ffffff-no-rj',
          channelName: '채널 이름이 뒤지게 길다 마치 나의 (이하 생략)',
          channelId: 'UCEfQQoxrwg_6O2UBjElwFsQ',
        },
        {
          channelProfile:
            'https://yt3.ggpht.com/ytc/AL5GRJVjZNEeZ9ik0iDUXhbAnYLCiVKP-oICbe7Wzp6e=s176-c-k-c0x00ffffff-no-rj',
          channelName: '채널 이름이 뒤지게 길다 마치 나의 (이하 생략)',
          channelId: 'UCEfQQoxrwg_6O2UBjElwFsQ',
        },
        {
          channelProfile:
            'https://yt3.ggpht.com/ytc/AL5GRJVjZNEeZ9ik0iDUXhbAnYLCiVKP-oICbe7Wzp6e=s176-c-k-c0x00ffffff-no-rj',
          channelName: '채널 이름이 뒤지게 길다 마치 나의 (이하 생략)',
          channelId: 'UCEfQQoxrwg_6O2UBjElwFsQ',
        },
        {
          channelProfile:
            'https://yt3.ggpht.com/ytc/AL5GRJVjZNEeZ9ik0iDUXhbAnYLCiVKP-oICbe7Wzp6e=s176-c-k-c0x00ffffff-no-rj',
          channelName: '채널 이름이 뒤지게 길다 마치 나의 (이하 생략)',
          channelId: 'UCEfQQoxrwg_6O2UBjElwFsQ',
        },
        {
          channelProfile:
            'https://yt3.ggpht.com/ytc/AL5GRJVjZNEeZ9ik0iDUXhbAnYLCiVKP-oICbe7Wzp6e=s176-c-k-c0x00ffffff-no-rj',
          channelName: '채널 이름이 뒤지게 길다 마치 나의 (이하 생략)',
          channelId: 'UCEfQQoxrwg_6O2UBjElwFsQ',
        },
        {
          channelProfile:
            'https://yt3.ggpht.com/ytc/AL5GRJVjZNEeZ9ik0iDUXhbAnYLCiVKP-oICbe7Wzp6e=s176-c-k-c0x00ffffff-no-rj',
          channelName: '채널 이름이 뒤지게 길다 마치 나의 (이하 생략)',
          channelId: 'UCEfQQoxrwg_6O2UBjElwFsQ',
        },
        {
          channelProfile:
            'https://yt3.ggpht.com/ytc/AL5GRJVjZNEeZ9ik0iDUXhbAnYLCiVKP-oICbe7Wzp6e=s176-c-k-c0x00ffffff-no-rj',
          channelName: '채널 이름이 뒤지게 길다 마치 나의 (이하 생략)',
          channelId: 'UCEfQQoxrwg_6O2UBjElwFsQ',
        },
      ],
    };
  }
  @Get('/test/result')
  @Render('result')
  async testResult() {
    return {
      channelId: 'channelId',
      order: 'date',
      channelName:
        '에이 설마 채널 이름이 동영상 이름보다 길 일이 얼마나 있겠냐',
      videos: [
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
        {
          videoId: 'Y0xMbCp8t4s',
          thumbnail:
            'https://i.ytimg.com/vi/Y0xMbCp8t4s/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARheIFsoZTAP&rs=AOn4CLAWsiJmy16L5VsqUBSwbjOauAg89w',
          title:
            '동영상 이름이라는 것은 140글자였나 280글자였나 기억이 안 나지만 어이가 없을 만큼 길 수가 있도록 제한이 널널하기 때문에 나의 생각에는 테스트 케이스도 길어야 한다고 생각한다 반박시 네 말이 맞다.',
        },
      ],
    };
  }
}

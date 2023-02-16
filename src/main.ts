import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import * as hbs from 'hbs';
import * as hbsUtils from 'hbs-utils';
import * as cookieParser from 'cookie-parser';
import * as csurf from 'csurf';
import * as compression from 'compression';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
    logger: ['error', 'warn', 'debug'],
  });
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', '..', 'views'));
  hbs.registerPartials(join(__dirname, '..', '..', 'views/layout'));
  hbsUtils(hbs).registerWatchedPartials(
    join(__dirname, '..', '..', 'views/layout'),
  );
  app.setViewEngine('hbs');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.enableCors();
  app.use(cookieParser());
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ['self'],
        imgSrc: ['self', 'https://yt3.ggpht.com'],
      },
    }),
  );
  app.use(csurf({ cookie: true }));
  app.use(compression());
  await app.listen(process.env.PORT);
}
bootstrap();

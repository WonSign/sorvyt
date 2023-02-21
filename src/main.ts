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
import * as crypto from 'crypto';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
    logger: ['error', 'warn', 'debug'],
  });
  const nonce = crypto.randomBytes(16).toString('base64');
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', '..', 'views'));
  hbs.registerPartials(join(__dirname, '..', '..', 'views/layout'));
  hbsUtils(hbs).registerWatchedPartials(
    join(__dirname, '..', '..', 'views/layout'),
  );
  app.setViewEngine('hbs');
  hbs.registerHelper('eq', function (a, b) {
    return a === b;
  });
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
        scriptSrc: ['self', `'nonce-${nonce}'`],
        imgSrc: ['self', 'https://yt3.ggpht.com'],
        mediaSrc: ['self', 'https://www.youtube.com'],
        frameSrc: ['self', 'https://www.youtube.com'],
      },
    }),
  );
  app.use(csurf({ cookie: true }));
  app.use(compression());
  await app.listen(process.env.PORT);
}
bootstrap();

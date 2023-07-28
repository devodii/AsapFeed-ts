import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.use(
    session({
      secret: 'My super secret',
      saveUninitialized: false,
      resave: true,
      cookie: { httpOnly: true },
    }),
  );

  app.use(cookieParser());

  app.setGlobalPrefix('/api/v1');

  app.use((req: any, res: any, next: any) => {
    res.removeHeader('x-powered-by');
    res.removeHeader('date');
    next();
  });

  const configService = new ConfigService();
  const port = configService.get('PORT');

  await app.listen(port);
}

bootstrap();

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfigModule } from './database/database.module';
import { JwtConfigModule } from './config/jwt.config';

@Module({
  imports: [
    UsersModule,
    DatabaseConfigModule,
    JwtConfigModule,
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

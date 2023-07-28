import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfigModule } from './database/database.module';
import { BoardModule } from './modules/board/board.module';

@Module({
  imports: [
    UsersModule,
    DatabaseConfigModule,
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    BoardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

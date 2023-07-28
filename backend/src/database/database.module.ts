import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from 'src/entities/board.entity';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        database: configService.get('POSTGRES_DB'),
        password: configService.get('POSTGRES_PASSWORD'),
        entities: [User, Board],
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
    TypeOrmModule.forFeature([User]),
  ],
})
export class DatabaseConfigModule {}

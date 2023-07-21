import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'asdfkyt',
      signOptions: { expiresIn: '1d' },
    }),
  ],
})
export class JwtConfigModule {}

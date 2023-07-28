import { BadRequestException, Injectable } from '@nestjs/common';
import { SignAcessProps } from 'src/utils/user.type';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signUp(params: SignAcessProps) {
    const { email, password } = params;
    const users = await this.userService.findByEmail(email);
    if (users.length > 0) {
      throw new BadRequestException('Email in use');
    }
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password as string, saltOrRounds);

    const createUser = await this.userService.create(email, hash);

    return createUser;
  }

  public async signIn(params: SignAcessProps) {
    const { email, password } = params;
    const [user] = await this.userService.findByEmail(email);
    if (!user) {
      throw new BadRequestException('Email not found');
    }

    const passwordIsMatch = await bcrypt.compare(password, user.password);

    if (!passwordIsMatch) {
      throw new BadRequestException('Invalid password');
    }

    return user;
  }
}

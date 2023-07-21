import { BadRequestException, Injectable } from '@nestjs/common';
import { SignAcessProps } from './types';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

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

  public async assignToken(payload: Record<string, any>) {
    const newToken = await this.jwtService.signAsync(payload);
    return newToken;
  }

  public async verifyToken(token: any) {
    try {
      const validToken = await this.jwtService.verifyAsync(token);
      return validToken;
    } catch (error) {
      throw new BadRequestException('error!');
    }
  }

  public async getUserWithToken(token: any) {
    const verifyToken = this.verifyToken(token);
    if (!token) {
      throw new BadRequestException('No token to be verified');
    }
    if (!verifyToken) {
      throw new BadRequestException('Token does not pass');
    }

    const user = this.userService.findById(token.user);
    return user;
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

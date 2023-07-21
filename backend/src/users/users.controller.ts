import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Req,
  Session,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { AuthGuard } from './guards/auth.guard';
import { Request } from 'express';
import { UsersService } from './users.service';
import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';

type SessionType = Record<string, any>;

@Controller('auth')
export class UsersController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}
  private logger = new Logger(UsersController.name);

  @Get('whoami')
  @UseInterceptors(CurrentUserInterceptor)
  whoAmI(@Req() req: any) {
    return req.currentUser;
  }

  @Post('signup')
  async signUp(
    @Body() body: CreateUserDto,
    @Session() session: Record<string, any>,
  ) {
    const user = await this.authService.signUp(body);
    session.userId = user.id;
    return user;
  }

  @Post('signin')
  async signin(
    @Body() body: CreateUserDto,
    @Session() session: Record<string, any>,
  ) {
    const user = await this.authService.signIn(body);
    session.userId = user.id;
    this.logger.log('Signing user in');
    return `This is the user's session id: ${session.userId}`;
  }

  @Post('signout')
  signout(@Session() session: SessionType) {
    session.userId = null;
    console.log(session);
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  findUser(@Param('id') id: number, @Session() session: SessionType) {
    return `This is the logged in user ${session.userId}`;
  }

  @Get('list-sessions')
  async listSessions(@Req() request: Request) {
    // Get the session store from the request object
    const store = request.sessionStore;

    // Get all the sessions from the store
    const allSessions = await new Promise<any>((resolve, reject) => {
      store.all((error, sessions) => {
        if (error) {
          reject(error);
        } else {
          resolve(sessions);
        }
      });
    });

    return allSessions;
  }
}

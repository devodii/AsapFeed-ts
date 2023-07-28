import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';
import { AbstractInterceptor } from './abstract.interceptor';

@Injectable()
export class CurrentUserInterceptor extends AbstractInterceptor {
  constructor(private userService: UsersService) {
    super();
  }

  checkRequest(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const { userId } = request.session;

    if (userId) {
      const user = this.userService.findById(Number(userId));
      request.currentUser = user;

      return !!user;
    }
  }
  throwForbiddenException(): void {
    throw new UnauthorizedException('no session provided');
  }
}

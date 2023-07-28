import {
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { AbstractInterceptor } from './abstract.interceptor';

@Injectable()
export class SessionInterceptor extends AbstractInterceptor {
  checkRequest(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const { currentUser } = request;
    return !!currentUser;
  }

  throwForbiddenException(): void {
    throw new ForbiddenException('You must be logged in to manage a board.');
  }
}

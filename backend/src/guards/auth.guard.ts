import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    /**
     * (!!) check if userId exists as any type and returns it's boolean value
     * @returns {boolean}
     */
    return !!request.session.userId;
  }
}

import { Injectable, HttpException, UnauthorizedException } from '@nestjs/common'
import { AuthGuard, PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { AuthService } from '../auth.service'

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor (private authService: AuthService) {
    super()
  }

  public async validate (username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password)
    
    if (user?.error) {
      throw new HttpException(user.error, user.error.statusCode)
    }

    if (!user) {
      throw new UnauthorizedException()
    }

    return user
  }
}

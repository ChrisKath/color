import { Injectable } from '@nestjs/common'
import { PassportStrategy, AuthGuard } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { UsersService } from '../../users/users.service'
import { secretKey } from 'src/common/config'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor (private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secretKey
    })
  }

  public async validate (payload: any) {
    return await this.usersService.findOne(payload.uid)
  }
}
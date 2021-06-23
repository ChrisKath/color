import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { compareSync } from 'bcrypt'
import moment from 'moment'
import { UsersService } from '@app/users/users.service'
import { appName, secretKey, tokenExpires } from '@/common/config'

@Injectable()
export class AuthService {
  constructor (
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  public async validateUser (username: string, password: string): Promise<any> {
    const user = await this.usersService.findAuth(username)

    // if undefined user
    if (!user) {
      return { error: { statusCode: 404, message: 'Email or Phone number is invalid.' } }
    }

    // Suspend user
    if (!user.isActive) {
      return { error: { statusCode: 403, message: 'Your account has been suspended.' } }
    }

    if (compareSync(password, user.password)) {
      return user
    }

    return null
  }

  public async login (user: any) {
    const token: string = this.jwtService.sign({
      iss: appName,
      uid: user.id
    }, {
      secret: secretKey,
      expiresIn: tokenExpires
    })

    let amount = +tokenExpires.match(/^\d+/)[0]
    let unit = tokenExpires.match(/\D/)[0] as moment.DurationInputArg2

    return {
      type: 'Bearer',
      accessToken: token,
      expiresDate: moment().add(amount, unit).toISOString()
    }
  }

  public validateToken (token: string) {
    return this.jwtService.verify(token)
  }
}

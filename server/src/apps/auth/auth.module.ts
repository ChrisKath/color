import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { secretKey, tokenExpires } from 'src/common/config'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UsersModule } from '../users/users.module'
import { JwtStrategy } from './guards/jwt.strategy'
import { LocalStrategy } from './guards/local.strategy'

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: secretKey,
      signOptions: {
        expiresIn: tokenExpires
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}

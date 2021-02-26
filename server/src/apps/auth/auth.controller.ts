import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { JwtAuthGuard } from './guards/jwt.strategy'
import { LocalAuthGuard } from './guards/local.strategy'

@Controller('auth')
export class AuthController {
  constructor (private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  public async login (@Request() req: { user: any }) {
    return this.authService.login(req.user)
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  public getProfile (@Request() req: any) {
    return req.user
  }
}

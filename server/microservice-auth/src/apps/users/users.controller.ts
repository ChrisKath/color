import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/guards/jwt.strategy'
import { User } from './users.interface'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor (private usersService: UsersService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  public findAll (): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  public findOne (@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id)
  }

  @Post('register')
  public create (@Body() params: User): Promise<any> {
    return this.usersService.create(params)
  }
}

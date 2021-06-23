import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersController } from './users.controller'
import { Users, Profile } from './users.entity'
import { UsersService } from './users.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Profile])
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}

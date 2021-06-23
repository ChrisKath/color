import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ormconfig } from '@/database/config'
import {
  AuthModule,
  GenresModule,
  TracksModule,
  UsersModule
} from '@/apps'

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    AuthModule,
    GenresModule,
    TracksModule,
    UsersModule
  ]
})
export class AppModule {}

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TracksController } from './tracks.controller'
import { Tracks } from './tracks.entity'
import { TracksService } from './tracks.service'

@Module({
  imports: [TypeOrmModule.forFeature([Tracks])],
  controllers: [TracksController],
  providers: [TracksService]
})
export class TracksModule {}

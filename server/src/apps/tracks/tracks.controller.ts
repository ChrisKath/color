import { Controller, Get, Param } from '@nestjs/common'
import { Track } from './tracks.interface'
import { TracksService } from './tracks.service'

@Controller('tracks')
export class TracksController {
  constructor (private tracksService: TracksService) {}

  @Get()
  public findAll (): Promise<Track[]> {
    return this.tracksService.findAll()
  }

  @Get(':id')
  public findOne (@Param('id') id: number): Promise<Track> {
    return this.tracksService.findOne(id)
  }
}

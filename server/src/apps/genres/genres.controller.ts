import { Controller, Get, Param } from '@nestjs/common'
import { Genre } from './genres.interface'
import { GenresService } from './genres.service'

@Controller('genres')
export class GenresController {
  constructor (private genresService: GenresService) {}

  @Get()
  public findAll (): Promise<Genre[]> {
    return this.genresService.findAll()
  }

  @Get(':id')
  public findOne (@Param('id') id: number): Promise<Genre> {
    return this.genresService.findOne(id)
  }
}

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Genres } from './genres.entity'

@Injectable()
export class GenresService {
  constructor (
    @InjectRepository(Genres) private genres: Repository<Genres>
  ) {}

  public findAll (): Promise<Genres[]> {
    return this.genres.find()
  }

  public findOne (id: number): Promise<Genres> {
    return this.genres.findOne(id)
  }
}

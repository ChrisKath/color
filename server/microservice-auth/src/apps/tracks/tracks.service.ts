import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, SelectQueryBuilder } from 'typeorm'
import { Tracks } from './tracks.entity'

@Injectable()
export class TracksService {
  constructor (
    @InjectRepository(Tracks) private tracks: Repository<Tracks>
  ) {}

  public async findAll (): Promise<Tracks[]> {
    const tracks = await this.createQueryBuilder()
      .getMany()
      
    return tracks
  }

  public async findOne (id: number): Promise<Tracks> {
    const track = await this.createQueryBuilder()
      .where('tracks.id = :value', { value: id })
      .getOne()

    return track
  }

  // __HELPERS
  private createQueryBuilder (): SelectQueryBuilder<Tracks> {
    return this.tracks.createQueryBuilder('tracks')
      .leftJoinAndSelect('tracks.genre', 'genre')
  }
}

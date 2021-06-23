import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GenresController } from './genres.controller'
import { Genres } from './genres.entity'
import { GenresService } from './genres.service'

@Module({
  imports: [TypeOrmModule.forFeature([Genres])],
  controllers: [GenresController],
  providers: [GenresService]
})
export class GenresModule {}

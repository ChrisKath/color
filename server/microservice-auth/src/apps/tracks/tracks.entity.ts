import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn
} from 'typeorm'
import { Genres } from '../genres/genres.entity'
import { Genre } from '../genres/genres.interface'

@Entity('tracks')
export class Tracks {
  @PrimaryGeneratedColumn({ name: 'TrackId', type: 'smallint' })
  public id: number

  @Column({ name: 'Name', type: 'varchar', length: 123, nullable: true })
  public name: string

  @Column({ name: 'Composer', type: 'varchar', length: 188, nullable: true })
  public composer: string

  @Column({ name: 'Milliseconds', type: 'int', nullable: true })
  public milliseconds: number

  @Column({ name: 'Bytes', type: 'bigint', nullable: true })
  public bytes: number

  @Column({ name: 'UnitPrice', type: 'decimal', precision: 3, scale: 2, nullable: true })
  public unitPrice: number


  // __RELATIONS
  @OneToOne(() => Genres)
  @JoinColumn({ name: 'GenreId', referencedColumnName: 'id' })
  public genre: Genre
}

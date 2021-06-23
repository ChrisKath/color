import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('genres')
export class Genres {
  @PrimaryGeneratedColumn({ name: 'GenreId', type: 'tinyint' })
  public id: number

  @Column({ name: 'Name', type: 'varchar', length: 18, nullable: true })
  public name: string
}

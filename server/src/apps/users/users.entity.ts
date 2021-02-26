import { Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, JoinColumn } from 'typeorm'
import { hashSync } from 'bcrypt'
import { DateColumn } from 'src/database/database.entity'

@Entity('users_profile')
export class Profile {
  @PrimaryGeneratedColumn({ name: 'ProfileId', type: 'int' })
  public id: number

  @Column({ name: 'Role', type: 'int', default: 1 })
  public role: number

  @Column({ name: 'Level', type: 'int', default: 1 })
  public level: number

  @Column({ name: 'ProfilePicture', type: 'varchar', length: 255, nullable: true })
  public picture: string

  @Column({ name: 'ContactInfo', type: 'json', nullable: true })
  public contact: any

  @Column({ name: 'Additional', type: 'json', nullable: true })
  public additional: any
}

@Entity('users')
export class Users extends DateColumn {
  @PrimaryGeneratedColumn({ name: 'UserId', type: 'int' })
  public id: number

  @Column({ name: 'Name', type: 'varchar', length: 128 })
  public displayName: string

  @Column({ name: 'Email', type: 'varchar', length: 128 })
  @Index({ unique: true })
  public email: string

  @Column({ name: 'Phone', type: 'varchar', length: 16, nullable: true })
  @Index({ unique: true })
  public phone: string

  @Column({
    name: 'Password',
    type: 'varchar',
    length: 255,
    select: false,
    transformer: {
      from: (value: string): string => value,
      to: (value: string): string => hashSync(value, 10)
    }
  })
  public password?: string

  @Column({ name: 'IsActive', type: 'tinyint', default: true })
  public isActive: boolean

  // __RELATION
  @OneToOne(() => Profile)
  @JoinColumn({ name: 'UserProfileId' })
  public profile: Profile
}

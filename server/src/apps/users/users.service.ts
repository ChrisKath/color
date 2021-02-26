import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, SelectQueryBuilder } from 'typeorm'
import { Users, Profile } from './users.entity'
import { User } from './users.interface'

@Injectable()
export class UsersService {
  constructor (
    @InjectRepository(Users) private users: Repository<Users>,
    @InjectRepository(Profile) private profile: Repository<Profile>
  ) {}

  public findAll (): Promise<Users[]> {
    return this.createQueryBuilder()
      .getMany()
  }

  public findOne (id: number): Promise<Users> {
    return this.createQueryBuilder()
      .where('user.id = :id', { id })
      .getOne()
  }

  public findAuth (username: string): Promise<Users> {
    return this.users.createQueryBuilder('user')
      .select([
        'user.id',
        'user.email',
        'user.phone',
        'user.password',
        'user.isActive'
      ])
      .where('user.email = :username', { username })
      .orWhere('user.phone = :username', { username })
      .getOne()
  }

  public async create (params: User): Promise<Users> {
    try {
      const profile: Profile = this.profile.create()
      await this.profile.save(profile)

      const user: Users = this.users.create()
      user.displayName = params.email.split('@')[0]
      user.email = params.email
      user.password = params.password
      user.profile = profile
      await this.users.save(user)
      
      let { password, ...saved } = user
      
      return saved
    } catch (error) {
      return error
    }
  }

  // __HELPERS
  private createQueryBuilder (): SelectQueryBuilder<Users> {
    return this.users.createQueryBuilder('user')
      .leftJoinAndSelect('user.profile', 'profile')
  }
}

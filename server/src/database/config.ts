import { ConnectionOptions } from 'typeorm'
import { dbConfigs } from '../common/config'

export const ormconfig: ConnectionOptions = {
  ...dbConfigs,
  type: 'mysql',
  entities: [
    `${__dirname}/../**/*.entity{.ts,.js}`
  ],
  synchronize: false,
  logging: ['error', 'warn', 'log']
}

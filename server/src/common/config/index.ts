import * as env from 'dotenv'
env.config()

export const appName: string      = process.env.APP_NAME || 'unset'
export const production: boolean  = process.env.NODE_ENV === 'production'
export const port: number         = Number(process.env.APP_SERVER_PORT) || 3000
export const apiVersion: string   = String(process.env.APP_API_VERSION) || '1'
export const apiKey: string       = process.env.API_SECRET_KEY || ''
export const secretKey: string    = process.env.APP_JWT_SECRET || ''
export const tokenExpires: string = process.env.APP_JWT_TTL || '1d'

export const microHost: string    = process.env.APP_MICRO_HOST || '127.0.0.1'
export const microPort: number    = Number(process.env.APP_MICRO_PORT) || 4000

export const redisHost: string    = process.env.APP_REDIS_HOST || '127.0.0.1'
export const redisPort: number    = Number(process.env.APP_REDIS_PORT) || 6379

// typeormConfigs
export const dbConfigs = {
  type: process.env.DB_CONNECTION || 'mysql',
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}

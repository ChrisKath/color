import { NestFactory } from '@nestjs/core'
import { AppModule } from './app'

(async () => {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
    maxAge: 3600
  })

  await app.listen(3000)
})()

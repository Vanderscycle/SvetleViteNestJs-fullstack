import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'; //first package to install
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import fastify from 'fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const server = fastify({ logger: true, ignoreTrailingSlash: true });

  server.register(require('fastify-cors'), {
    origin: true,
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
  });

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(server),
  );

  //validation pipe for the app
  app.useGlobalPipes(new ValidationPipe())
  const config = new DocumentBuilder()
    .setTitle('backend NestJS REST API template')
    .setDescription('simplete NestJs template')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('/swagger',app,document)
  await app.listen(
    process.env.SERVER_PORT ?? 3001,
    '0.0.0.0',
    (err, address) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      console.log(`🚀 backend running on ${'localhost'}; port ${3001}`);
    },
  ); //it only works in 127/0/0/1 ask the boss on how to make it localhost
}
bootstrap();

import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { RestApiController } from './rest-api.controller';
import { greetingProvider } from './rest-api.providers';
import { RestApiService } from './rest-api.service';

@Module({
  imports:[DatabaseModule],
  controllers: [RestApiController],
  providers: [RestApiService, ...greetingProvider]
})
export class RestApiModule {}

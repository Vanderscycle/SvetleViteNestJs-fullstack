import { Mongoose } from 'mongoose';
import { GreetingSchema } from './schema/greeting.schema';

export const greetingProvider = [
  {
    provide: 'GREETING_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Greeting', GreetingSchema),
    inject: ['DATABASE_CONNECTION'],//comes from ./database/database.provider.ts
  }
]
//sorta confused between service and providers
//TODO: read about: inversion of control (a way to only have a single instance)

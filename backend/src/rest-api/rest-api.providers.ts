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

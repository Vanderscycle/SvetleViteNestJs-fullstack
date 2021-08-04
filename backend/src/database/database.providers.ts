import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>//pretty clever way to infer type
      await mongoose.connect('mongodb://127.0.0.1:27018/backendTemplate'),
        //      await mongoose.connect('mongodb://localhost/nest'),
  },
];

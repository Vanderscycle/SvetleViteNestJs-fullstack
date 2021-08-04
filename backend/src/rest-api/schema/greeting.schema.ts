import * as mongoose from 'mongoose';

export const GreetingSchema = new mongoose.Schema({
  //notice how we are using different class types
  id: Number,
  msg: String,
});

//represent database tables (mongo/typeOrm)

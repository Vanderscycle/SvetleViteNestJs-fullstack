import { Document } from "mongoose";

export interface Greeting extends Document {
  id:number;
  msg:string;
}

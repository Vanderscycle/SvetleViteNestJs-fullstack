import { Document } from "mongoose";

export interface GreetingInterface extends Document {
  id:number;
  msg:string;
}

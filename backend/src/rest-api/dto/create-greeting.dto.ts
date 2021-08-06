import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, MaxLength } from "class-validator";

export class CreateGreetingDto {
  @ApiProperty()//adds schema in swagger docs (usefull for post)
  //INFO: the cool thing with NestJs is that it will return the class validator error along with the 400
  @IsAlphanumeric()//from class validator
  @MaxLength(12)
  msg:string;
  
  // @ApiProperty({required:false})//optional input parameter
  // language?:string
}
//info: client/server interaction

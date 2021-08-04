import { ApiProperty } from '@nestjs/swagger';
//even if its not used as an js array we can use it for swagger docs

export class Greeting {
  @ApiProperty()
  id: number;

  @ApiProperty()
  msg: string;
}


//use the entity to populate service and controller types (test only)

import { ApiProperty } from '@nestjs/swagger';

export class Greeting {
  @ApiProperty()
  id: number;

  @ApiProperty()
  msg: string;
}


//use the entity to populate service and controller types (test only)

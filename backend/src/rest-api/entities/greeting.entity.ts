import { ApiProperty } from '@nestjs/swagger';

export class Greeting {
  @ApiProperty()
  id: number;

  @ApiProperty()
  msg: string;
}

//represent database tables (mongo/typeOrm)
//use the entity to populate service and controller types

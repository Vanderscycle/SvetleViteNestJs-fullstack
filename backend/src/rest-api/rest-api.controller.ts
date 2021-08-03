import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateGreetingDto } from './dto/create-greeting.dto';
import { Greeting } from './entities/greeting.entity';
import { RestApiService } from './rest-api.service';

@ApiTags('greetings') //creates swagger heading
@Controller('rest-api')
export class RestApiController {
  //automatically injected in the controller (nestJs instantiates the injected class for us including the type)
  constructor(private restApiService: RestApiService) {}

  @ApiOkResponse({ type: Greeting, isArray: true })
  @ApiQuery({name:'msg',required:false})
  @Get()
  getGretingMsg(@Query('msg') msg?:string):Greeting[]{//localhost:3001/rest-api?msg=你好
    return this.restApiService.findAll(msg)
  }

  // @ApiOkResponse({ type: Greeting, isArray: true })
  // @Get()
  // getAllGreetings(): Greeting[] {
  //   return this.restApiService.findAll();
  // }

  @ApiOkResponse({ type: Greeting})
  @ApiNotFoundResponse()//tells swagger that a 404 answer is possible
  @Get(':id')
  getGreetingById(@Param('id', ParseIntPipe) id: number): Greeting {//without the pipe you need to convert from string to int
    console.log('--->', typeof id)
    const greeting = this.restApiService.findById(id);

    if (!greeting){//error handling
      throw new NotFoundException()// https://docs.nestjs.com/exception-filters (list of nestJs classes)
    }
    return greeting
  }
  @ApiCreatedResponse({ type: Greeting }) //provides the documentation in swagger regarding the output
  @ApiBadRequestResponse()//because of class validators
  @Post()
  createEntry(@Body() body: CreateGreetingDto): Greeting {
    return this.restApiService.createEntry(body);
  }
}

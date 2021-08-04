import { Injectable } from '@nestjs/common';
import { CreateGreetingDto } from './dto/create-greeting.dto';
import { Greeting } from './entities/greeting.entity';

@Injectable()
export class RestApiService {
  //in the development stage we can use the class entity to test
  private greetings: Greeting[] = [
    { id: 0, msg: 'Hello' },
    { id: 1, msg: '你好' },
    { id: 2, msg: 'Bonjour' },
  ];

  findAll(msg?: string): Greeting[] {
    if (msg) {
      return this.greetings.filter((greeting) => greeting.msg === msg);
    }
    return this.greetings;
  }
  findById(greetingId: number): Greeting {
    return this.greetings.find((greeting) => greeting.id === greetingId);
    //why g => g.id === greetingId works and not (g) => {g.id === greetingId}
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  }

  createEntry(createGreetingDto: CreateGreetingDto): Greeting {
    const newGreeting = { id: this.greetings.length, ...createGreetingDto };
    //WARN: I don't understand js ...
    this.greetings.push(newGreeting);
    return newGreeting;
  }
}

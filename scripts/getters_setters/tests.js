import {EmailParser} from './email-parser'

let parser = new EmailParser('hello@world.ru');
console.log(parser.name);
console.log(parser.domain);
console.log(parser.isCorrect);

parser.email = 'hello@world';
console.log(parser.name);
console.log(parser.domain);
console.log(parser.isCorrect);
import http from 'http';
import coffee  from './lib/coffee.js';
import moment from "moment";
import { EventEmitter } from 'events';
console.log(coffee);

const hostname = process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com';
const port = 3000;
const date = moment().format("MMM Do YY");
const myEventEmitter = new EventEmitter();
const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('When i find myself in time of trouble, mother mary come to me!\n');
};
const server = http.createServer(requestHandler);
server.listen(port, hostname, () => {
  console.log(`Server berjalan pada http://${hostname}:${port}/`);
});

const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = ({ price }) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}

const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee({ name });
    makeBill({ price });
}

console.log(date);

const memoryInformation = process.memoryUsage();
 
console.log(memoryInformation);

const firstName = process.argv[2];
const lastName = process.argv[3];
 
console.log(`Hello ${firstName} ${lastName}`);
myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

myEventEmitter.emit('coffee-order', { name: 'Tubruk' , price: 15000});
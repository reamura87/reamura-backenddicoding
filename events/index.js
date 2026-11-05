import eventEmitter from 'events';
 
const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
}
 
const myEventEmitter = new eventEmitter();
 
myEventEmitter.on('birthday', birthdayEventListener);
 
myEventEmitter.emit('birthday', 'Reamura');
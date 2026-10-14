import EventEmitter from "events";

const emitter = new EventEmitter()
// emitter.setMaxListeners(2)
// emitter.on('a',()=>{
//   console.log('a');
// })
// emitter.on('a',()=>{
//   console.log('a2');
// })
// emitter.on('a',()=>{
//   console.log('a3');
// })
// emitter.on('x',()=>{
//   console.log('x');
// })
console.log("start");

emitter.off('z',()=>{
  console.log('z');
})

emitter.on('b',()=>{
  console.log('b');
})


emitter.once('hello',()=>{
  console.log('hii');
})
console.log(emitter.emit('hello'));
console.log('end');












console.log(emitter.emit('a'));

console.log(emitter);
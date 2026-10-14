import EventEmitter from "events";
const emitter = new EventEmitter()
emitter.setMaxListeners(2)
emitter.on('ab',()=>{
  console.log('ab');
})
emitter.on('ab',()=>{
  console.log('ab');
})
emitter.once('u',()=>{
  console.log('krishna');
})
emitter.off('xy',()=>{
  console.log('xy');
})
emitter.emit('ab')
console.log(emitter);
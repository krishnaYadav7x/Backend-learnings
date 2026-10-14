import EventEmitter from 'events'


// EventEmitter is a Node.js class for working with events.

// .on() registers a listener.

// In Node.js, emitter.once() registers a listener that executes only once for a particular event. After the event is emitted and the listener executes, Node.js automatically removes that listener.

// .emit() announces an event and invokes its registered listeners.

const emitter = new EventEmitter()
emitter.setMaxListeners(2)
// emitter.on('abc',()=>{
//   console.log('abc')
// })
// emitter.on('abc',()=>{
//   console.log('xyz')
// })
// emitter.on('abc',()=>{
//   console.log('xyz')
// })

// emitter.on('y',()=>{
//   console.log('bbb')
// })
// emitter.on('z',()=>{
//   console.log('gg')
// })
// emitter.on('m',()=>{
//   console.log('gg')
// })
emitter.on('n',()=>{
  console.log('gg')
})
emitter.emit('n')
emitter.emit('n')
emitter.emit('n')

console.log(emitter);

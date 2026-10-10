import {Buffer} from 'buffer'

const buffer1 = Buffer.alloc(4)
const buffer2 = Buffer.allocUnsafe(4)

console.log(buffer1);
console.log(buffer2);
console.log('end');

console.time('alloc')

for(let i=0; i<100000; i++){
  const buffer = Buffer.alloc(1024)
}

console.timeEnd("alloc");

console.time('unsafe')
for(let i=0; i<100000; i++){
  const buffer = Buffer.allocUnsafe(1024)
}
console.timeEnd("unsafe");



// Buffer.allocUnsafe() can be faster because it skips zero-initialization.  experiment demonstrates that advantage in your environment, but the performance difference is not guaranteed to remain the same in every situation.






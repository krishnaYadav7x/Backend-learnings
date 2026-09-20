console.log('a start');
console.time()
for(let i=0; i<100000000000; i++){
  if(i%400000000==0){
    console.log(`running loop 1 ${i}`);
  }
}
console.timeEnd()
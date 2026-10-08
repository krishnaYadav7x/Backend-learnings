const a = new ArrayBuffer(1.99*1024*1024*1024)
const view = new DataView(a)

for(let i=0; i<2136746229; i++){
  view.setInt8(i,i+1)
}

console.log(a);
console.log('end');
setInterval(()=>{
  console.log('hii');
},500)
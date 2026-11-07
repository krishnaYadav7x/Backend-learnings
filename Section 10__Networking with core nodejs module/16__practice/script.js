const response = await fetch("http://10.253.238.185:1000/");
console.log(response)

response.headers.forEach((value,key)=>{
  console.log(value,key)
})

const decoder = new TextDecoder('utf-8')
for await(const chunk of response.body){
  console.log(chunk)
  // console.log(decoder.decode(chunk))
}
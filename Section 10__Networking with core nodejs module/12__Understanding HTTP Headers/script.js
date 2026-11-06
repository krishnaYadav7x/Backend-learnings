const response = await fetch("http://10.253.238.185:1000/");

// console.log(response.body)

for await(const chunk of response.body){
  console.log(chunk)
}

response.headers.forEach((value,key)=>{
  console.log(value,key)
})
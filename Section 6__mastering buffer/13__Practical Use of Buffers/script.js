fetch("http://localhost:3000/",{
  method:"POST",
  body:"my name is krishna"
}).then((res)=>res.text()).then((data)=>console.log(data))
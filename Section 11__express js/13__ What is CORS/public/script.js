const response = await fetch("http://10.253.238.185:4000/api");
const data = await response.json();

console.log(data);

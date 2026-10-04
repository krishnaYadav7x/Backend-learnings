// Base 10:

// 4   5   2   1
// │   │   │   │
// 10³ 10² 10¹ 10⁰


const arr = [2,4,6,5]
let output = 0
for(let i=0; i<arr.length; i++){
  output+=arr[i]*(10**i)
}
console.log(output);




//octal number system

// Base 8:

// 4   5   2   1
// │   │   │   │
// 8³  8²  8¹  8⁰

const a = 0o126
console.log(a);

function digitsToNum(digits,radix=10){
  let number = 0
  for(let i=0; i<digits.length; i++){
    number+=digits[i]*(radix**(digits.length-1-i))
  }
  return number
}
console.log(digitsToNum([2,3,7],8));






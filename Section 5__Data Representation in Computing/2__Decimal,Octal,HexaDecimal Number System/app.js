// Base 10:

// 4   5   2   1
// │   │   │   │
// 10³ 10² 10¹ 10⁰

// const arr = [2,4,6,5]
// let output = 0
// for(let i=0; i<arr.length; i++){
//   output+=arr[i]*(10**i)
// }
// console.log(output);

//octal number system

// Base 8:

// 4   5   2   1
// │   │   │   │
// 8³  8²  8¹  8⁰

// const a = 0o126
// console.log(a);

// function digitsToNum(digits,radix=10){
//   let number = 0
//   for(let i=0; i<digits.length; i++){
//     number+=digits[i]*(radix**(digits.length-1-i))
//   }
//   return number
// }
// console.log(digitsToNum([2,3,7],8));

//hexadecimal

// console.log(parseInt(456,16));
console.log(parseInt(0x45b, 10));
// const num = 2115
// console.log(num.toString(16));

const hexNum = 0x45b;

function digitsToNum(digits, radix = 10) {
  let number = 0;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i].toLowerCase() === "a") {
      digits[i] = 10;
    }
    if (digits[i].toLowerCase() === "b") {
      digits[i] = 11;
    }
    if (digits[i].toLowerCase() === "c") {
      digits[i] = 12;
    }
    if (digits[i].toLowerCase() === "d") {
      digits[i] = 13;
    }
    if (digits[i].toLowerCase() === "e") {
      digits[i] = 14;
    }
    if (digits[i].toLowerCase() === "f") {
      digits[i] = 15;
    }
    number += digits[i] * radix ** (digits.length - 1 - i);
  }
  return number;
}

console.log(digitsToNum(["f", "F", "f"], 16));

function digitsToNumber(digits, radix = 10) {
  const updateToDigits = digits.map((d, i) => {
    if (typeof d === "string") {
      d = d.toLowerCase();
      if (d === "a") d = 10;
      if (d === "b") d = 11;
      if (d === "c") d = 12;
      if (d === "d") d = 13;
      if (d === "e") d = 14;
      if (d === "f") d = 15;
    }

    return d;
  });

  let decimalNumber = 0;
  for (let i = 0; i < updateToDigits.length; i++) {
    decimalNumber +=
      updateToDigits[i] * radix ** (updateToDigits.length - 1 - i);
  }
  return decimalNumber;
}

console.log(digitsToNumber(["f", "f", "f"], 16));

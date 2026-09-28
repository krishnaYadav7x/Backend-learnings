function product(...nums){
  return nums.reduce((a,c)=>a*c)
}

console.log(module.exports===exports);

exports = product

// module.exports = product

// let send = module.exports
// send.product = product
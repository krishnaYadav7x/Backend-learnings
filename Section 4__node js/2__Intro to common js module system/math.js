function product(...nums) {
  return nums.reduce((c, a) => c * a);
}

function sum(...nums) {
  return nums.reduce((c, a) => c + a);
}


module.exports.sum=sum
module.exports.product=product

// module.exports = {product,sum}

// console.log(module.exports);

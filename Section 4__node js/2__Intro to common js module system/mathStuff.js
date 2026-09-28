function add(...nums) {
  return nums.reduce((a, b) => a + b);
}

function multiply(...nums) {
  return nums.reduce((a, b) => a * b);
}

console.log('executed');

// module.exports = {add,multiply}


module.exports.add = add
module.exports.multiply = multiply;

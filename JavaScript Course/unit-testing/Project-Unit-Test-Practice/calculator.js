//calculator unit test
function calculator(a,b) {
  return {
    add: () => a+b,
    subtract: () => a-b,
    multiply: () => a*b,
    divide: () => a/b
  }
};
module.exports = calculator;

const calculator = require('./calculator');
test('calculates the sum of two numbers', () => {
  expect(calculator(2, 3).add()).toBe(5);
});
test('calculates the difference of two numbers', () => {
  expect(calculator(5, 3).subtract()).toBe(2);
});
test('calculates the product of two numbers', () => {
  expect(calculator(2, 3).multiply()).toBe(6);
});
test('calculates the quotient of two numbers', () => {
  expect(calculator(6, 3).divide()).toBe(2);
});
  
const caesarCipher = require('./caesarCipher');

test('shifts a letter by the given amount', () => {
  expect(caesarCipher('hello', 1)).toBe('ifmmp');
});

test('wraps around the alphabet', () => {
  expect(caesarCipher('zebra', 1)).toBe('afcsb');
});

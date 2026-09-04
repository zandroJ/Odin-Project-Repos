const reverseString = require('./reverseString');
test('reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

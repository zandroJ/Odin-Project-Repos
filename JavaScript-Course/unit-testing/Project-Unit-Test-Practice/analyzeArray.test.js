const analyzeArray = require('./analyzeArray');

test('analyzeArray function should return an object with average, min, max, and length properties', () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

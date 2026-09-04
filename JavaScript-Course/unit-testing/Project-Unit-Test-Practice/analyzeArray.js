function analyzeArray(arr) {

  const sum = arr.reduce((sum, number) => sum + number, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return {
    average,
    min,
    max,
    length
  };
}

module.exports = analyzeArray;



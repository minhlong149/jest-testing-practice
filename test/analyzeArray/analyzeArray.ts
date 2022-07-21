const analyzeArray = (array: number[]) => ({
  average: averageArray(array),
  min: minOfArray(array),
  max: maxOfArray(array),
  length: array.length,
});

export { analyzeArray };

function maxOfArray(array: number[]) {
  return array.reduce((max, number) => (max < number ? number : max), array[0]);
}

function minOfArray(array: number[]) {
  return array.reduce((min, number) => (min > number ? number : min), array[0]);
}

function averageArray(array: number[]) {
  return array.reduce((sum, number) => sum + number, 0) / array.length;
}

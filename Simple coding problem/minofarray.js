const numbers = [10, 20, 30, 40, 50, 3, 5, 7, 1];

function getMin(array) {
  let minNum = array[0];
  for (const min of array) {
    if (min < minNum) {
      minNum = min;
    }
  }
  return minNum;
}

const min = getMin(numbers);
console.log(min);

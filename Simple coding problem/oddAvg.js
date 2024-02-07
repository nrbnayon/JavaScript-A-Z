// Find odd numbers average across the array
/**
 * function takes an array as parameter
 * give me the average of the only odd numbers in the array
 * I can
 * 1. put odd numbers in an array
 */
function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    // console.log(number);
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  // console.log(odds);
  let sum = 0;
  for (const number of odds) {
    sum = sum + number;
  }
  const count = odds.length;
  console.log(sum, count);
  const avg = sum / count;
  return avg;
}
const numbers = [4, 1, 3, 521, 51, 33, 12, 444];
const avg = oddAverage(numbers);
console.log(avg);

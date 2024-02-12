/**
 * array as some duplicates elements
 * remove duplicates elements
 */

const dupArray = ["abul", "babul", "kabul", "cabul", "dabul", "abul", "babul"];

const numbers = [1, 4, 5, 3, 1, 2, 2, 3, 5];

function noDuplicate(array) {
  const unique = [];
  for (const item of array) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}
const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);

const numbersCheck = [1, 4, 5, 3, 1, 2, 2, 3, 5];

function dupNumCheck() {
  const uniqueNumbers = [];
  for (const number of numbersCheck) {
    if (uniqueNumbers.includes(number) === false) {
      uniqueNumbers.push(number);
    }
  }
  return uniqueNumbers;
}

const result = dupNumCheck(numbersCheck);

console.log(result);

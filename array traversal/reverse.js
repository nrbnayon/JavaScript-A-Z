const numbers = [1, 5, 6, 7, 8, 50];
// 1. way
// numbers.reverse();
console.log(numbers);
// 2.
const revNumbers = [];
for (const num of numbers) {
  console.log(num);
  revNumbers.unshift(num);
}
console.log(revNumbers);

// for loop

const revNum = [];
for (let i = 0; i < numbers.length; i++) {
  revNum.unshift(numbers[i]);
}
console.log(revNum);

// reverse side
const revSideNum = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  revSideNum.push(numbers[i]);
}
console.log(revSideNum);

const array = [1, 5, 6, 7, 8, 50];
const reversedArray = [];
for (let i = array.length - 1; i >= 0; i--) {
  reversedArray.push(array[i]);
}
console.log(reversedArray);

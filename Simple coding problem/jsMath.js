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

const max = Math.max(45, 44, 100, 11, 500);
console.log(max);

console.log(Math.PI); // Outputs the value of pi (approximately 3.141592653589793)
console.log(Math.abs(-100)); // Outputs the absolute value of -100, which is 100
console.log(Math.abs(100 - 200));
// Other math operations:
console.log(Math.sqrt(16)); // Outputs the square root of 16, which is 4
console.log(Math.pow(2, 3)); // Outputs 2 raised to the power of 3, which is 8
console.log(Math.ceil(4.2)); // Outputs the smallest integer greater than or equal to 4.2, which is 5
console.log(Math.floor(4.9)); // Outputs the largest integer less than or equal to 4.9, which is 4
console.log(Math.round(4.5)); // Rounds 4.5 to the nearest integer, which is 5
console.log(Math.min(10, 20, 30)); // Outputs the smallest of the provided numbers, which is 10
console.log(Math.max(10, 20, 30)); // Outputs the largest of the provided numbers, which is 30
console.log(Math.random() * 10); // Generates a random number between 0 (inclusive) and 1 (exclusive) 0-10 for *10
const rand = Math.round(Math.random() * 10);
console.log(rand);

console.log(Math.sin(Math.PI / 2)); // Outputs the sine of π/2 radians, which is 1
console.log(Math.cos(Math.PI)); // Outputs the cosine of π radians, which is -1
console.log(Math.tan(Math.PI / 4)); // Outputs the tangent of π/4 radians, which is approximately 1

console.log(Math.log(Math.E)); // Outputs the natural logarithm of Euler's number (e), which is 1
console.log(Math.exp(1)); // Outputs e raised to the power of 1, which is approximately 2.718

console.log(Math.atan(1)); // Outputs the arctangent (in radians) of 1, which is π/4
console.log(Math.atan2(1, 1)); // Outputs the angle (in radians) from the X-axis to the point (1,1), which is π/4

console.log(Math.PI * 2); // Outputs twice the value of pi, which is approximately 6.283185307179586
console.log(Math.abs(-42)); // Outputs the absolute value of -42, which is 42

console.log(Math.floor(Math.random() * 10)); // Generates a random integer between 0 and 9 (inclusive)
console.log(Math.round(Math.random())); // Generates either 0 or 1 randomly

console.log(Math.pow(3, 2)); // Outputs 3 raised to the power of 2, which is 9
console.log(Math.sqrt(144)); // Outputs the square root of 144, which is 12

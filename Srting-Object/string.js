// Type of strings declaration
const country = "Bangladesh";

const division = "Noakhali";

const district = `B-Baria`; // powerful string `back teck`

const thana = new String("Ppur"); // string but object

// Number is mutable --> changeable
// Array is mutable --> you can change the array with elements
const numbers = [50, 55, 60, 70];
console.log(numbers.length);
console.log(numbers[1]);
console.log(numbers);
numbers[1] = 11; // Number array changeable
console.log(numbers);

// String is immutable it not changeable
const capital = "Dhaka";
console.log(capital.length);
console.log(capital);
numbers[1] = "F"; // Number array changeable
console.log(capital);

// Bank it job qn
let ans = 0;
let i = 0;
let num = 102301;

while (num !== 0) {
  console.log(ans);
  if (num % 10 === 0) {
    ans = ans + Math.pow(10, i);
  } else {
    ans = ans + (num % 10) * Math.pow(10, i);
  }
  // console.log(ans);
  num = Math.floor(num / 10);
  i++;
  // console.log(ans);
}
console.log(ans);

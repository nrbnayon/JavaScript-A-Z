// Task 1

let money = 1000;
let apple1kg = 400;
let orange1kg = 300;

let shopkeeperReturn = money - (apple1kg + orange1kg);

console.log("Shopkeeper Will return me: ", shopkeeperReturn);

// Task 2

let math = 75.25;
let bio = 65;
let chem = 80;
let phy = 35.45;
let ban = "99.5"; // string convert into float number : parseFloat(ban)
let eng = "99.5"; // string convert into +ve Integer number : parseInt(ban)

console.log(parseInt(eng));

const totalMarks = math + bio + chem + phy + parseFloat(ban);
console.log(totalMarks);
console.log((totalMarks / 5).toFixed(2));

// toFixed(how many number we want after dot)

// Task-3 Print the remainder.

console.log("Print the remainder", 119 % 5);

//or
function calculateRemainder(number) {
  // Calculate the remainder when dividing the number by 5
  let remainder = number % 5;

  return remainder;
}

// Sample Input
let number = 119;

// Calculate the remainder
let result = calculateRemainder(number);

// Output the result
console.log(result);

// Task-4
var a = isNaN("11");
var b = isNaN(2 - 10);
console.log(b);

/**
1. `var a = isNaN('11');`

   In this line, `isNaN()` is a JavaScript function that stands for "Is Not a Number". It returns `true` if the argument cannot be converted into a number, and `false` otherwise. The argument `'11'` is a string containing digits, which can be converted into a number. Therefore, `isNaN('11')` evaluates to `false`. So, the variable `a` will be assigned the value `false`.

2. `var a = isNaN(2-10);`

   In this line, `2-10` evaluates to `-8`, which is a valid number. Therefore, `isNaN(2-10)` evaluates to `false` because `-8` is a number. So, the variable `a` will be assigned the value `false`.

Therefore, the result of both lines of code will be:


a = false;

var a = isNaN(2 - 10);
Here, 2 - 10 is a numerical operation, which results in -8. So, effectively, this line is equivalent to isNaN(-8).

Similarly, isNaN() coerces its argument to a number before checking. -8 is a valid number, so isNaN(-8) returns false.

So, after this line executes, the variable a will be assigned the value false again.
 */

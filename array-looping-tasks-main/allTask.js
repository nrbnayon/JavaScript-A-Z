const colors = ["red", "blue", "green", "yellow", "orange"];

const reversedColors = [];
for (let i = colors.length - 1; i >= 0; i--) {
  reversedColors.push(colors[i]);
}

console.log(reversedColors);
// 2.
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers);

// 3.
var signs = ["Tom", "Tim", "Tin", "Tik"];
var concatenatedString = "";

for (const element of signs) {
  concatenatedString += element;
}

console.log(concatenatedString);

// 4.
const statement = "I am a hard working person";
const reversedStatement = statement.split(" ").reverse().join(" ");

console.log(reversedStatement);

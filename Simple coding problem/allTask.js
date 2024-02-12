function celsiusToFahrenheit(celsius) {
  // Convert Celsius to Fahrenheit using the formula: (C × 9/5) + 32
  return (celsius * 9) / 5 + 32;
}

// Example usage:
const celsiusTemperature = 25;
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);

// 2

const numbers = [5, 6, 11, 12, 98, 5];

function count(number, find) {
  let match = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] === find) {
      match++;
    }
  }
  return match;
}

const countNumber = count(numbers, 25);
console.log("Number match time: ", countNumber);

// 3

function vowelsCheck(sentences) {
  let num = 0;
  const vowels = /[aeiou]/i;
  for (let i = 0; i < sentences.length; i++) {
    if (vowels.test(sentence[i])) {
      num++;
    }
  }
  return num;
}

const sentence = "Hello Bangladesh";

const totalVowels = vowelsCheck(sentence);
console.log(
  `The number of vowels in "${sentence}" is: ${vowelsCheck(sentence)}`
);

function countVowels(str) {
  // Convert the string to lowercase to handle both uppercase and lowercase vowels
  str = str.toLowerCase();

  // Define an array of vowels
  const vowels = ["a", "e", "i", "o", "u"];

  // Initialize a variable to store the count of vowels
  let count = 0;

  // Loop through each character in the string
  for (let char of str) {
    // If the character is a vowel, increment the count
    if (vowels.includes(char)) {
      count++;
    }
  }

  // Return the count of vowels
  return count;
}

// Example usage:
const str = "Hello World";
console.log(`The number of vowels in "${str}" is: ${countVowels(str)}`);

function longestWord(str) {
  // Split the string into an array of words
  const words = str.split(" ");
  console.log(words);

  // Initialize variables to keep track of the longest word and its length
  let longest = "";
  let maxLength = 0;

  // Loop through each word in the array
  for (let word of words) {
    console.log(word);
    // Remove any non-alphabetic characters from the word
    const cleanWord = word.replace(/[^a-zA-Z]/g, "");
    // console.log(cleanWord);
    // Check if the current word is longer than the previous longest word
    if (cleanWord.length > maxLength) {
      // Update the longest word and its length
      longest = cleanWord;
      maxLength = cleanWord.length;
    }
  }

  // Return the longest word found
  return longest;
}

// Example usage:
const inputString = "I am learning Programming to become a programmer";
console.log("Longest word:", longestWord(inputString)); // Output: Programming

function generateRandomNumber() {
  // Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
  const randomNumber = Math.random();

  // Scale the random number to the desired range (10 to 20)
  const scaledNumber = randomNumber * (20 - 10) + 10;

  // Round the scaled number to the nearest integer
  const randomInteger = Math.round(scaledNumber);

  return randomInteger;
}

// Example usage:
const randomNumber = generateRandomNumber();
console.log("Random number between 10 and 20:", randomNumber);

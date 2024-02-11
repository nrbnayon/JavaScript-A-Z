// Task 1.  Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

const fruits = ["Apple", "Banana", "Goava", "Watermelon", "Jackfruit"];
console.log(fruits[3]);

fruits[2] = "Jambura";
console.log(fruits);

// Task 2.  Add or remove elements
//Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output
const getTours = ["Jaflong", "Cox Bazar", "Sajek"];
getTours.push("Kuakata");
getTours.push("Barisal", "Rajapur");
console.log(getTours);
getTours.pop();
console.log(getTours);

// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.

const getBooks = ["Bangla", "English", "Math", "C", "JavaScript"];

if (getBooks.includes("JavaScript")) {
  console.log("JavaScript is available");
} else {
  console.log("Sorry");
}

// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

const array = [1, 3, 4, 5, 6];
const nonArray = "String";

console.log(Array.isArray(array), "Yes it is a array");
console.log(Array.isArray(nonArray), "Sorry it is not a array");

// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

const array1 = [12, 35, 55];
const array2 = [44, 77, 88];
console.log(array1.concat(array2));

const school = "High Model School";

// Mix case
console.log(school);
// convert to lowercase
console.log(school.toLowerCase());
// Uppercase the
console.log(school.toUpperCase());

// Word need should be same or use lower and upper case
const subject = "Chemistry";
const book = "chemistry"; // string data case sensitive
if (subject.toLowerCase() === book.toLowerCase()) {
  console.log("Exam Passed");
} else {
  console.log("Exam Failed");
}

// white space need should be same or use tirmStart and trimEnd or trim
const water = "  Chemistry";
const liquid = "  chemistry    "; // string data case sensitive
if (water.trim() === liquid.trim()) {
  console.log("Water Passed");
} else {
  console.log("Water Failed");
}

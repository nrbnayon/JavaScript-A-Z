// Array Methods
// includes is case sensitive

const friends = ["Balam", "Kalam", "Molom", "pailam"];
console.log(friends.includes("gelam")); // false not in array
console.log(friends.includes("Balam")); // true in array

// indexOf is case sensitive and find index number

console.log(friends.indexOf("kalam")); // -1 false not in array
console.log(friends.indexOf("Kalam")); // 1 true in array

// Array.isArray Check elements array or not

const nums = [];
const food = "ap p le";
console.log(Array.isArray(food));
console.log(Array.isArray(friends));
console.log(Array.isArray(nums));

for (let i = 0; i < 5; i += 3) {
  console.log(i);
}

const array = [1, 2, 3, 4, 5, 6, 7];
for (let i = 1; i < array.length; i++) {
  if (i == 5) {
    continue;
  }
  console.log(array[i]);
}

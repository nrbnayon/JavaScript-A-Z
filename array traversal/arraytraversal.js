/**
 * Looping technique
 * 1. for loop
 * 2. while loop
 * 3. do while --> optional
 * 4. for of --> array loop korar jonno
 * 5. for in --> object loop korar jonno
 */

const friends = ["Elon", "Bill", "Mask", "Weren"];
console.log(friends);

// 1. for loop

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

// 2. while loop

let n = 0;
while (n < friends.length) {
  console.log(friends[n]);
  n++;
}

// 3. for of

for (const friend of friends) {
  console.log(friend);
}

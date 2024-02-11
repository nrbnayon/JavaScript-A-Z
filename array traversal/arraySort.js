const persons = ["akin", "khakin", "dakin", "cakin"];

const sortedPersons = persons.sort(); //--> ascending order - smaller to larger .sort() not working properly
console.log(sortedPersons);

const numbers = [1, 2, 3, 4, 5, 70, 43, 55];

const numberAsc = [...numbers].sort(function (a, b) {
  return a - b;
});
const numberDsc = [...numbers].sort(function (a, b) {
  return b - a;
});

console.log(numberAsc);
console.log(numberDsc);

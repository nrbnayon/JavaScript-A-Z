/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

const number = 5;
let i = 1;
const tableLength = 10; // Length of the multiplication table

console.log(`Multiplication table for ${number}:`);

while (i <= tableLength) {
  console.log(`${number} * ${i} = ${number * i}`);
  i++;
}

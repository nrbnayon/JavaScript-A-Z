/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
let oddSum = 81;
let oddTotal = 0;
while (oddSum <= 131) {
  if (oddSum % 2 !== 0) {
    oddTotal = oddTotal + oddSum;
  }
  oddSum++;
}
console.log(oddTotal);

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let evenNum = 206;
let evenTotal = 0;
while (evenNum <= 311) {
  if (evenNum % 2 === 0) {
    evenTotal = evenTotal + evenNum;
  }
  evenNum++;
}
console.log(evenTotal);

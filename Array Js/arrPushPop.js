// Add remove Elements From Arrays Using Push,Pop (add/remove in after last elements of index) Shift, Unshift(add/remove in before first elements of index)

const ages = [];
const numbers = [10, 20, 30, 40];

console.log(ages, numbers);

// push the elements

numbers.push(44, 100);
const inAge = ages.push(25);
console.log(ages, numbers);

// pop the elements

ages.pop(0);
const out100 = numbers.pop(100);

console.log(ages, numbers);
console.log(out100);

const numbers = [45, 65, 23, 98, 19];

// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   console.log(number);
// }

for (const number of numbers) {
  console.log(number);
}

const products = [
  { id: 1, name: "Sumsung Phone", price: 19000 },
  { id: 2, name: "one plus phone", price: 1000 },
  { id: 3, name: "Sumsung laptop", price: 119000 },
  { id: 4, name: "Sumsung phone", price: 12000 },
  { id: 5, name: "HP Laptop", price: 18000 },
  { id: 6, name: "Nokia phone", price: 10000 },
  { id: 7, name: "Iphone laptop", price: 9000 },
  { id: 8, name: "Macbook", price: 1000 },
];

for (const product of products) {
  console.log(product);
}

function matchedProduct(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}
const result = matchedProduct(products, "laptop");
console.log(result);

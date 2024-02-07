Certainly! Here is a list of commonly used methods for manipulating arrays in JavaScript:

1. **push()**
   - Adds one or more elements to the end of an array and returns the new length.

   ```javascript
   const fruits = ['apple', 'banana'];
   fruits.push('orange');
   // Result: fruits = ['apple', 'banana', 'orange']
   ```

2. **pop()**
   - Removes the last element from an array and returns that element.

   ```javascript
   const fruits = ['apple', 'banana', 'orange'];
   const lastFruit = fruits.pop();
   // Result: lastFruit = 'orange', fruits = ['apple', 'banana']
   ```

3. **shift()**
   - Removes the first element from an array and returns that element.

   ```javascript
   const fruits = ['apple', 'banana', 'orange'];
   const firstFruit = fruits.shift();
   // Result: firstFruit = 'apple', fruits = ['banana', 'orange']
   ```

4. **unshift()**
   - Adds one or more elements to the beginning of an array and returns the new length.

   ```javascript
   const fruits = ['banana', 'orange'];
   fruits.unshift('apple');
   // Result: fruits = ['apple', 'banana', 'orange']
   ```

5. **slice()**
   - Returns a shallow copy of a portion of an array into a new array.

   ```javascript
   const fruits = ['apple', 'banana', 'orange', 'grape'];
   const slicedFruits = fruits.slice(1, 3);
   // Result: slicedFruits = ['banana', 'orange']
   ```

6. **splice()**
   - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

   ```javascript
   const fruits = ['apple', 'banana', 'orange', 'grape'];
   fruits.splice(2, 1, 'kiwi', 'melon');
   // Result: fruits = ['apple', 'banana', 'kiwi', 'melon', 'grape']
   ```

7. **concat()**
   - Returns a new array comprised of this array joined with other arrays or values.

   ```javascript
   const fruits = ['apple', 'banana'];
   const moreFruits = fruits.concat('orange', 'grape');
   // Result: moreFruits = ['apple', 'banana', 'orange', 'grape']
   ```

8. **indexOf()**
   - Returns the first index at which a given element can be found in the array, or -1 if it is not present.

   ```javascript
   const fruits = ['apple', 'banana', 'orange'];
   const index = fruits.indexOf('banana');
   // Result: index = 1
   ```

9. **includes()**
   - Returns a boolean indicating whether an array includes a certain element.

   ```javascript
   const fruits = ['apple', 'banana', 'orange'];
   const hasBanana = fruits.includes('banana');
   // Result: hasBanana = true
   ```

10. **forEach()**
    - Calls a provided function once for each element in the array, in order.

    ```javascript
    const numbers = [1, 2, 3];
    numbers.forEach(num => console.log(num));
    // Result: Prints 1, 2, 3
    ```

These are just a few of the many methods available for working with arrays in JavaScript. Each method serves a specific purpose and can be useful depending on the task you are trying to accomplish.
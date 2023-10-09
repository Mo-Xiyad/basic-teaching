/**
//TODO:
Day 1: Basic TypeScript Challenge

Problem:
Write a TypeScript function that takes in an array of numbers and returns the sum of all the numbers in the array.

Hints:

Think about how you would iterate through each number in the array.
Keep a running total.
*/
const numbers = [1, 2, 3, 4, 5];

function sum({ arr }: { arr: number[] }) {
  let total = 0 as number;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(sum({ arr: numbers }));

// Using reduce method:
function sumUsingReduce(arr: number[]): number {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
console.log(sumUsingReduce(numbers));
// Using forEach method:
function sumUsingForEach(arr: number[]): number {
  let total = 0;
  arr.forEach((value) => {
    total += value;
  });
  return total;
}
console.log(sumUsingForEach(numbers));

// Using the ES6 spread operator with the Math object:
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

// Recursive approach:
function sumRecursive(arr: number[], index = 0): number {
  if (index >= arr.length) return 0;
  return arr[index] + sumRecursive(arr, index + 1);
}
console.log(sumRecursive(numbers));

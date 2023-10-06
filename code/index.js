/**
//TODO:
Day 1: Basic TypeScript Challenge

Problem:
Write a TypeScript function that takes in an array of numbers and returns the sum of all the numbers in the array.

Hints:

Think about how you would iterate through each number in the array.
Keep a running total.
*/
var numbers = [1, 2, 3, 4, 5];
function sum(_a) {
    var arr = _a.arr;
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
console.log(sum({ arr: numbers }));

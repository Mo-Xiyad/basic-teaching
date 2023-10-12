import { Rectangle } from './day_2_a';

/**
1. Extend the Rectangle: Create a Square class

Inheritance is a cornerstone of object-oriented programming. Let's create a Square class that extends the Rectangle class. The Square should only need one side length to be defined since all sides are equal.

Hints:

Use the super keyword to call the parent's constructor.
The Square class should only need one value for its constructor: the side length.
2. Implement an abstract class: Shape

Create an abstract class called Shape that has:

An abstract method area() that returns a number.
An abstract method perimeter() that returns a number.
Now, refactor the Rectangle and Square classes to extend the Shape class and implement the necessary methods.

Hints:

Abstract methods in the abstract class don't have a body.
Every class that extends the abstract class must implement the abstract methods.
3. Class with static method: Calculator

Create a Calculator class that doesn't have any instance properties or methods but has the following static methods:

add(a: number, b: number): number - returns the sum.
subtract(a: number, b: number): number - returns the difference.
multiply(a: number, b: number): number - returns the product.
divide(a: number, b: number): number - returns the quotient. Handle the case where b is 0 and throw an error.
Hints:

You call static methods on the class itself, not on instances of the class.

*/
class Square extends Rectangle {
  constructor(sideLength: number) {
    super(sideLength, sideLength);
  }
}

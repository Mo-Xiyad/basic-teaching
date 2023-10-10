/**
Day 2: Intermediate TypeScript Challenge

Problem:
Create a TypeScript class called Rectangle that has two properties: width and height. The class should have the following methods:

area(): This should return the area of the rectangle (width * height).
perimeter(): This should return the perimeter of the rectangle (2 * (width + height)).
isSquare(): This should return a boolean indicating whether the rectangle is a square (width == height).
Additionally, make sure that the width and height are positive numbers. If someone tries to create a rectangle with a non-positive width or height, throw an error.

Hints:

Remember to use the constructor method in the class to initialize properties.
Use TypeScript type annotations to ensure type safety.
*/

class Rectangle {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Dimensions must be positive numbers.');
    }
    this.width = width;
    this.height = height;
  }
  area(): number {
    return this.width * this.height;
  }
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
  isSquare(): boolean {
    return this.width === this.height;
  }
}

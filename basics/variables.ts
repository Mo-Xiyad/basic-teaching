// TypeScript Variables

// Declaring Variables
let num: number = 42; // Number variable
let name: string = 'John'; // String variable
let isCoding: boolean = true; // Boolean variable

// Type Inference
let age = 30; // TypeScript infers the type as number

// Const vs. Let
const pi = 3.14159; // Constant variable (immutable)
let counter = 0; // Mutable variable

// Variable Scoping
function scopeExample() {
  if (true) {
    let blockScopedVar = "I'm scoped to this block";
  }
  // console.log(blockScopedVar); // This will result in an error
}

// Template Literals
let greeting = `Hello, ${name}! You are ${age} years old.`;

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];

// Tuples
let person: [string, number] = ['Alice', 30];

// Enums
enum Color {
  Red,
  Green,
  Blue
}

let selectedColor: Color = Color.Green;

// Any Type
let anyVar: any = 42;
anyVar = 'I can be anything';

// Null and Undefined
let x: null = null;
let y: undefined = undefined;

// Void Type (usually used for function return types)
function logMessage(message: string): void {
  console.log(message);
}

// Never Type (used for functions that never return)
function throwError(message: string): never {
  throw new Error(message);
}

// Union Types
let mixedType: string | number = 'Hello';
mixedType = 42;

// Type Aliases
type Point = { x: number; y: number };
let coordinates: Point = { x: 10, y: 20 };

// Type Assertion (Type Casting)
let someValue: any = 'This is a string';
let strLength: number = (someValue as string).length;

// Exporting Variables (if this is part of a module)
export { name, num };

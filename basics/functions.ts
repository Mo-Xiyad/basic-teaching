/** 
const toLocalDateStringCache = new Map();

// export function toLocalDateString(dateTime, timeZone) {
//   const d = new Date(dateTime);
//   d.setMinutes(0, 1, 0); // The local date string only changes on whole hours
//   const ts = d.getTime();
//   if (toLocalDateStringCache.has(ts)) {
//     return toLocalDateStringCache.get(ts);
//   }
//   const localDateString = d
//     .toLocaleString('sv-SE', {
//       timeZone
//     })
//     .substring(0, 10);
//   toLocalDateStringCache.set(ts, localDateString);
//   return localDateString;
// }
function findTimeZone(timestamp: any) {
  // Create a Date object from the timestamp
  const date = new Date(timestamp);

  // Get the time zone offset in minutes
  const timeZoneOffset = date.getTimezoneOffset();

  // Convert the offset to hours and minutes
  const hours = Math.abs(Math.floor(timeZoneOffset / 60));
  const minutes = Math.abs(timeZoneOffset % 60);

  // Determine the sign of the offset
  const sign = timeZoneOffset > 0 ? '-' : '+';

  // Construct the offset string in ISO 8601 format (e.g., "+05:00" or "-03:30")
  const offsetString = `${sign}${String(hours).padStart(2, '0')}:${String(
    minutes
  ).padStart(2, '0')}`;

  // Use Intl.DateTimeFormat to get the time zone abbreviation
  const timeZoneAbbreviation = new Intl.DateTimeFormat('en-US', {
    timeZoneName: 'short'
  }).format(date);

  // Combine the offset and abbreviation to form the time zone information
  const timeZoneInfo = `${offsetString} (${timeZoneAbbreviation})`;

  return timeZoneInfo;
}

// Example usage:
const timestamp = Date.now(); // Replace with the timestamp from your database
const timeZone = findTimeZone(timestamp);
console.log(`Likely Time Zone: ${timeZone}`);
*/
// TypeScript Functions

// Function Declaration
function add(x: number, y: number): number {
  return x + y;
}

// Function Expression
const subtract = function (x: number, y: number): number {
  return x - y;
};

// Arrow Function
const multiply = (x: number, y: number): number => x * y;

// Optional and Default Parameters
function greet(name: string, greeting: string = 'Hello'): string {
  return `${greeting}, ${name}!`;
}

// Rest Parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

// Function Overloading
function greetPerson(person: string): string;
function greetPerson(person: string, age: number): string;
function greetPerson(person: string, age?: number): string {
  if (age === undefined) {
    return `Hello, ${person}!`;
  } else {
    return `Hello, ${person}! You are ${age} years old.`;
  }
}

// Callback Functions
function fetchData(callback: (data: string) => void) {
  // Simulate fetching data
  const data = 'This is some data';
  callback(data);
}

// Higher-Order Functions
function applyOperation(
  x: number,
  y: number,
  operation: (a: number, b: number) => number
): number {
  return operation(x, y);
}

// Function Types
type MathOperation = (a: number, b: number) => number;

// Function Type Annotations
const addition: MathOperation = (a, b) => a + b;
const subtraction: MathOperation = (a, b) => a - b;

// Exporting Functions (if this is part of a module)
export {
  add,
  addition,
  applyOperation,
  fetchData,
  greet,
  greetPerson,
  multiply,
  subtract,
  subtraction,
  sum
};

# TypeScript Functions

Welcome to the "TypeScript Functions" section of our "Learn to Code with TypeScript" repository. In this section, we will explore various aspects of functions in TypeScript, from basic function declarations to more advanced concepts like callback functions and function types.

## Table of Contents

- [Function Declaration](#function-declaration)
- [Function Expression](#function-expression)
- [Arrow Function](#arrow-function)
- [Optional and Default Parameters](#optional-and-default-parameters)
- [Rest Parameters](#rest-parameters)
- [Function Overloading](#function-overloading)
- [Callback Functions](#callback-functions)
- [Higher-Order Functions](#higher-order-functions)
- [Function Types](#function-types)
- [Function Type Annotations](#function-type-annotations)
- [Running the Code](#running-the-code)

## Function Declaration

We'll start by discussing the basics of function declaration in TypeScript.

````typescript
// Function Declaration
function add(x: number, y: number): number {
  return x + y;
}

## Running the Code
To run the TypeScript code examples in this repo, follow these steps:

- **Install TypeScript:** If you haven't already installed TypeScript globally on your system, you can do so using npm (Node Package Manager). Open your terminal and run

    ```bash
    npm install -g typescript
    ```
- **Compile TypeScript to JavaScript:** In the functions folder, run the following command to transpile the functions.ts file to JavaScript:

      ```bash
      tsc functions.ts
      ```
This will create a functions.js file in the same directory.
````

- **Run the JavaScript File:** Finally, run the JavaScript file using Node.js:

  ```bash
  node functions.js
  ```

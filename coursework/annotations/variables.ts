// This is how to define a number type on a variable
let apples: number = 5;

// If we now try and update the value to a boolean we will see any error:

let apples2: number = true;

// Same if we declare apples as a string:
apples = 'string';

// ____________________________________________________________________________

// This is a string type declaration:
let speed: string = 'fast';

// ____________________________________________________________________________

// This is a null type decalaration:
let nothingMuch: null = null;

// ____________________________________________________________________________

// This is an undefined type declaration:
let nothing: undefined = undefined;

// ____________________________________________________________________________

// This is a built-in object type using the date object: https://www.javatpoint.com/typescript-date-object
let now: Date = new Date();

// ____________________________________________________________________________

// Array annotations
let colours: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];
let outcomes: boolean[] = [true, true, false];

// ____________________________________________________________________________

// These are classes. Classes are capitalised by convention:

class Car {}

// This is then refering to the instance of a car:

let car: Car = new Car();

// ____________________________________________________________________________

// Object literal annotations:

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Note how this will flag an error "Type 'string' is not assignable to type 'number'.ts(2322)"

let point2: { x: number; y: number } = {
  x: '10',
  y: 20,
};

// Likewise this will flag an error as property 'z' is unexpected.
//"Object literal may only specify known properties, and 'z' does not
//exist in type '{ x: number; y: number; }'.ts(2353)"

let point3: { x: number; y: number } = {
  x: 10,
  z: 20,
};

// ____________________________________________________________________________

// Function annotation:

// This syntax says that the function expects an 'i' argument of type number and will return nothing (void)
// Everything between : and = is the type decalaration. Aka (i: number) => void
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// ____________________________________________________________________________

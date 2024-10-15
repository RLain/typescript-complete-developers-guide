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
// Note this example is focusing on the Type of the variable aka  (i: number) => void which is the left side of the = 
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type

//  JSON.parse() returns an 'any' type as Typescript can't ascertain what will be parsed. (Hover mouse over coordinates)
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);

//To fix this up we can add an Object type annotation.  (Hover mouse over coordinates)
const json2 = '{"x": 10, "y": 20}';
const coordinates2: { x: number, y: number} = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initialize it later. (Hover over foundWord. let foundWord: any)
// a)
let words = ['red', 'green', 'blue'];
let foundWord;
for (let i = 0; i < words.length; i++){
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// b) We can fix this using Type Annotation BUT note this doesn't initialize the value unless the loop if() is reached
// Meaning foundWord2 could be undefined...see the below example (2c).
let words2 = ['red', 'green', 'blue'];
let foundWord2: boolean; 
for (let i = 0; i < words.length; i++){
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// c) Whereas this approach leverages off Type Inference and ensures foundWord3 is intialized. 
// This is considered best practise 🚀
let words3 = ['red', 'green', 'blue'];
let foundWord3 =  false; 
for (let i = 0; i < words.length; i++){
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
// Note in the course the Lecturer explains that this is not a great code example.... but does showcase the inference clash
// a) 
let numbers2 = [-10, -1, 12];
let numbersAboveZero = false
for (let i = 0; i < numbers2.length; i++){
  if (numbers[i] > 0) {
    // Type 'number' is not assignable to type 'boolean'.ts(2322)
    // Type inference kicked in using let numbersAboveZero = false but doesn't understand the assignment of a number to it.
    numbersAboveZero = numbers2[i] 
  }
}

// b) Adding Type annotation then fixes the type error
let numbers3 = [-10, -1, 12];
let numbersAboveZero2: boolean | number = false
for (let i = 0; i < numbers3.length; i++){
  if (numbers[i] > 0) {
    numbersAboveZero2 = numbers3[i] 
  }
}

// ____________________________________________________________________________

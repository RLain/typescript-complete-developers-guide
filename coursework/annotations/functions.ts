// Function annotation:

// 1)
// a) Parameter 'a' implicitly has an 'any' type, but a better type may be inferred from usage.ts(7044)
// Parameter 'b' implicitly has an 'any' type, but a better type may be inferred from usage.ts(7044)
const add = (a, b) => {

}

// b) This then adds a Type annotation to the function parameters (what is being received into the function)
const add2 = (a: number, b: number) => {

}

// c) This then adds a Type annotation to the function result (what the function will return)
const add3 = (a: number, b: number): number => {
    return a + b;
}

// d) Example of returning the wrong type.
const add4 = (a: number, b: number): number => {
    return `this will return an error: Type 'string' is not assignable to type 'number'.ts(2322)`
}

// e) Note how in the following the type system _only_ cares about the types and does _not_ validate the logic. 
const add5 = (a: number, b: number): number => {
    return a - b
}

// f) This is Type Inference at play. The function knows we will return a number meaning the function result annotation is not critical
const add6 = (a: number, b: number) => {
    return a + b
}

// g) HOWEVER....the function annotation should always be provided (See 1c)! The following passes Typescript however is returning void
// And should be returning a number
const add7 = (a: number, b: number) => {
     a + b
}

// h) See how adding the Function Annotation now shows the error 'A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.ts(2355)'
// This is how we can be a better developer using Typescript.
const add8 = (a: number, b: number): number => {
    a + b
}








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

// i) This is the same for the Function syntax
function divide(a: number, b: number): number {
  return a / b
}

//____________________________________

// 2) Void and Never

// A function that returns void, means it it designed to not return anything. Theoretically it can return null or undefined. But must've return anything else
const logger = (message: string): void => {
    console.log(message)
}

// Type 'string' is not assignable to type 'void'.ts(2322)
const logger2 = (message: string): void => {
    return 'bad must not return anything'
}

// Technically, when you throw an error you are not returning something
// We only annotate a function with the type never when we expect it to never return something....
// This is different to void where there may be a chance of returning nothing. Never is absolute
const throwError = (message: string): never => {
    throw new Error(message)
}

// Here is an example of there being a chance of returning nothing and where void is more appropriate
// If there is no message then the function returns nothing, else throws the error. So nothing !== never.
const throwError2 = (message: string): void => {
    if (!message) {
        throw new Error(message)
    }
}

// Read more on never here https://www.reddit.com/r/typescript/comments/14lskcm/in_simple_english_can_someone_explain_to_me_when/?rdt=37739


// 3) Destructuring with Annotations

// a) We start with a simple example of a weather function with a defined object forcast that contains date and weather keys
const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date)
    console.log(forecast.weather)
}

logWeather(todaysWeather)

// b) ES2015 syntax shows how we can destructure in the function params
const logWeather2 = ({ date, weather }) => {
    console.log(date)
    console.log(weather)
}

// c) If we now put these together we can destructure within the functon itself and include the Type annotations
// So the following allows us to destructure the values, ensure they are typed and retain the void output
const logWeather3 = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date)
    console.log(weather)
}





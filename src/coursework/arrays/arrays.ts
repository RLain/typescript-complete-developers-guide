// Example of Type Inference in action = const carMakers: string[] (Hover over carMakers)
const carMakers = ['ford', 'toyota', 'chevy']

// To be explicit and use an annotation it would be
const carMakers2: string[] = ['ford', 'toyota', 'chevy']

// The following will infer the array is an any[]
/* Note when I added this my type inferred as never[] Think this may be due to the default Typescript settings that VSCode is using 
(arisen from an update on Typescript since the production of this video)

Without a tsconfig.json file, I also see never[]. When I add a tsconfig.json file and use 
noImplicitAny": true it then infers as any[]. R
elated docs = https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#noimplicitany

TLDR:
• No tsconfig.json = never[]
• "noImplicitAny": false = never[]
• "noImplicitAny": true = any[]*/
const carMakers3 = []

// We can also add complex objects into arrays

// Infers const dates: Date[]
const dates = [new Date(), new Date()]

// Here is an example of a two dimmensional array with inference = const carsByMake: string[][]
// This is an array containing an array of strings
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

// 1) Help with inference when extracting values

// E.g. the following infer because it knows that carMakers contains strings
const car2 = carMakers[0] // = const car2: string
const myCar = carMakers.pop() // = const myCar: string | undefined

// 2) Prevent incompatiable values
carMakers.push(100) // = Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)

// 3) Help with 'map'
// In the following example, we have defined car as a string. On the 'return car' line, if you add a dot e.g. car.
// The IDE will provide a list of autocomplete string methods such as length, match, toUpperCase, slice tc. 
carMakers.map((car: string): string => {
    return car // <-- Test here
})

// 4) Flexible types
const importantDates = [new Date(), 'random word'] // = Inference is const importantDates: (string | Date)[]
const importantDates2: (Date | string)[] = [new Date(), 'random word'] // with Annotation
importantDates2.push('another random word')
importantDates2.push(new Date())
importantDates2.push(100) // Will throw an error as number is not allowed = Argument of type 'number' is not assignable to parameter of type 'string | Date'.ts(2345)

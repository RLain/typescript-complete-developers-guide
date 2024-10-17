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


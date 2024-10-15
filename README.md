# 👩‍💻 Udemy Course: [Typescript Complete Developers Guide](https://www.udemy.com/course/typescript-the-complete-developers-guide)

## Things installed during the course

- [typescript](https://www.npmjs.com/package/typescript)
  - $ `npm install -g typescript@latest`
- [ts-node](https://www.npmjs.comg/package/ts-node)
- [axios](https://www.npmjs.com/package/axios) with a caveat that we `downgraded` to 0.27.2 due to "There is currently a major bug that has broken the last three versions of axios since v1.".

## Useful commands

- $ `tsc --help`
- $ `npm list` = To see the latest version of all the npm package installed, including their dependencies

## Resources

- https://jsonplaceholder.typicode.com/ = Free fake API for testing and prototyping.
- [Diagrams draw.io](https://www.drawio.com/)
- [RallyCoding](https://discord.com/channels/797239171730505839/797239171730505842) - discord server

## Course notes

### TS Type System

- Helps us `catch errors during development`.
- Uses `type annotations` to analyze codebase. Comments that describe the purpose of the code/information flow
- Only active `during development`. Code is compiled into Javascript.
- Doesn't provide any `performance optimization`. Different to other languages.

Typescript is compiled into Javascript using `tsc`. Typescript is never executed. The Javascript is. Node doesn't know what Typescript is.

Think of Typescript as a `coding helper`. It helps us catch errors, but doesn't impact the final output.

### Types

Easy way to refer to the different properties + functions that a value has.

There are two main categories:

##### 1. Primitive types

- number
- string
- boolean
- void
- undefined
- null
- symbol

#### 2. Object types

- arrays
- objects
- functions
- classes

#### Annotation vs inference

We care about types because:

- Types are used by the Typescript Compiler to analyze our code for errors
- Types allow other engineers to understand what values are flowing around our codebase

| Type annotations (We tell Typescript the type) |  Type inference (Typescript guesses the type) |
| -------------------- | ------ | 
| When to use....               | When to use.... | 
| When a function returns the 'any' type and we need to clarify the value                | Always! | 
| When we declare a variable on one line then initialize it later               |  | 
| When we want a variable to have a type that can't be inferred
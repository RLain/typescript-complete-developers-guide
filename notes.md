# Course notes

## TS Type System

- Helps us `catch errors during development`.
- Uses `type annotations` to analyze codebase. Comments that describe the purpose of the code/information flow
- Only active `during development`. Code is compiled into Javascript.
- Doesn't provide any `performance optimization`. Different to other languages.

Typescript is compiled into Javascript using `tsc`. Typescript is never executed. The Javascript is. Node doesn't know what Typescript is.

Think of Typescript as a `coding helper`. It helps us catch errors, but doesn't impact the final output.

## Things installed during the course

- [typescript](https://www.npmjs.com/package/typescript)
  - $ `npm install -g typescript@latest`
- [ts-node](https://www.npmjs.com/package/ts-node)
- [axios](https://www.npmjs.com/package/axios) with a caveat that we `downgraded` to 0.27.2 due to "There is currently a major bug that has broken the last three versions of axios since v1.".

## Useful commands

- $ `tsc --help`
- $ `npm list` = To see the latest version of all the npm package installed, including their dependencies

## Resources

- https://jsonplaceholder.typicode.com/ = Free fake API for testing and prototyping.

This document aims to summarise how Type Inference works.

If we take the example of `let apples: number = 5;` on the variables.ts file, and
we remove the : number statement to have `let apples = 5;`, Typescript will _still_ know that apples
must be a number! Aka `let apples: number`.

This is _Type Inference_.

The vriable decalaration is split into two parts

| Variable Declaration |        | Variable initialization |       |
| -------------------- | ------ | ----------------------- | ----- |
| const                | colour | =                       | "red" |

If declaration and initialization are on the same line,
Typescript will figure out the type of "colour" for us.

If we move the `initializaion` onto a separate line, then this doesn't work. E.g.

```
let apples;
applies = 5;
```

Typescript will now infer `let apples: any`

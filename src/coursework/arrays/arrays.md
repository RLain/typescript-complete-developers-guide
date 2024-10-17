# Arrays

- Arrays in Typescript are the same as plain Javascript arrays
- We can push, pop, map, forEach, for etc
- The main difference is that we only stick elements with a very consistent type into the array
- You can technically add different types into the array but this requires specific type annotation

## Why do we care?

- TS can do type inference when extracting values from an array
- TS can prevent us from incompatiable values to the array
- We can get help with 'map', 'forEach', 'reduce' functions
- Flexible - arrays can still contain multiple different types

## Where to use typed arrays

Anytime we need to represent a collection of records with some arbitrary sort order


Note: Tuples are slightly different to arrays. Head to /tuples for intel
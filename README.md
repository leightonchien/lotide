# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @leightonc/lotide`

**Require it:**

`const _ = require('@leightonc/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

 `head(array)`: returns the first element of an array
- `tail(array)`: returns the last element of an array
- `middle(array)`: returns the middle element of an array, if even return both.
- `countLetters(string)`: given a string of letters return an object with the letters/ count of each
- `countOnly(allitems, itemtoCount)`: given an object and list of values return how many times those values show up.
- `eqArrays(arr1, arr2)`: checks if two arrays are the same
- `eqObjects(obj1, obj2)`: check if two objects are the same
- `findKey(object, callback)`: given an object and callback, returns the key
- `findKeyByValue(obj, obj-value)`: given an obj and value returns the key
- `letterPositions(string)`: returns an object with an array of positions for each letter
- `map(array, callback)`: returns an array with the callback applied
- `takeUntil(array, callback)`: returns all elements in array up to matching element.
- `without(array, array)`: returns new array without elements from excluded list.
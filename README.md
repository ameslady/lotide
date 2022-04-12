# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ameslady/lotide`

**Require it:**

`const _ = require('@ameslady/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: prints pass or fail assertions based on the strict equality of two arrays
* `assertEqual(actual, expected)`: compares the actual value to the expected value, pass or fail
* `assertObjectsEqual(actual, expected)`: prints pass or fail assertions based on the equality of two objects
* `countLetters(sentence)`: takes a sentence (as a string) and returns a count of each of the letters in that sentence.
* `countOnly(allItems, itemsToCount)`: takes an array and object and returns an object containing counts of everything that the input object listed.
* `eqArrays(arr1, arr2)`: function that takes in two arrays and returns true or false, based on a perfect match
* `eqObjects(obj1, obj2)`: compares object data to determine if they are equal
* `findKey(object, callback)`: scans the object and return the first key for which the callback returns a truthy value.
* `findKeyByValue(object, value)`: scans the object and returns the first key that contains the given value.
* `head(array)`: returns the the head of an array
* `letterPositions(sentence)`: returns all the indices (zero-based positions) in the string where each character is found
* `map(array, callback)`: iterates through an array and returns new array based on conditions
* `middle(array)`: takes in an array and returns the middle-most element(s)
* `tail(array)`: returns the tail of an array (every element but the head)
* `takeUntil(array, callback)`: returns a slice of the array with elements taken from the beginning. 
* `without(source, itemsToRemove)`: removes any specified unwanted elements from an aray (should modify source array)

## To-Do List (Not needed for project submission)

**Refactor the following functions by creating test files and using mocha & chai:**

* `assertArraysEqual` 
* `assertEqual` 
* `assertObjectsEqual`
* `countLetters`
* `eqArrays`
* `eqObjects`
* `findKey`
* `findKeyByValue`
* `letterPositions`
* `map`
* `takeUntil`
* `without`
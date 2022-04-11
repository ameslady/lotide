const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // fail
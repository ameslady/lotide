const eqArrays = require('./eqArrays');

// prints pass or fail assertions based on the strict equality of two arrays
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;

// test cases
// assertArraysEqual([1, 2, 3], [1, 2, 3]); // pass
// assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // fail
// assertArraysEqual([1, 2, 3], [3, 2, 3]); // fail
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // pass
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // fail
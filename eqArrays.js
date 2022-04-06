const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement a function that takes in two arrays 
// and returns true or false, based on a perfect match.
const eqArrays = function (arr1, arr2) {
  let perfectMatch;

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    perfectMatch = (arr1[i] !== arr2[i]) ? false : true;
  }
  
  return perfectMatch;
};

// Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true) // false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true) // false

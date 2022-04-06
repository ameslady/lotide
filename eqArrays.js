// to be imported from other files eventually
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function that takes in two arrays and returns true or false, based on a perfect match
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // fail

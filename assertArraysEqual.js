// to be imported from other files eventually
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// prints pass or fail assertions based on the strict equality of two arrays
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // pass
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // fail
assertArraysEqual([1, 2, 3], [3, 2, 3]); // fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // fail
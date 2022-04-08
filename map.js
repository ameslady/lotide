// to be imported from other files eventually
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// to be imported from other files eventually
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// iterates through an array and returns new array based on conditions
const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// test cases
const words = ["ground", "control", "to", "major", "tom"];
const nums = [1, 2, 3, 4, 5, 6, 7 ]
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(nums, n => n * 2);
//console.log(results3);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 6, 7, 2, 5, 3 ]);
assertArraysEqual(results3, [ 2, 4, 6, 8, 10, 12, 14 ]);

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// iterates through an array and returns new array based on conditions
const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;


// Test cases to be moved to their own file:
// const words = ["ground", "control", "to", "major", "tom"];
// const nums = [1, 2, 3, 4, 5, 6, 7 ]
// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word.length);
// const results3 = map(nums, n => n * 2);
//console.log(results3);

// assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
// assertArraysEqual(results2, [ 6, 7, 2, 5, 3 ]);
// assertArraysEqual(results3, [ 2, 4, 6, 8, 10, 12, 14 ]);

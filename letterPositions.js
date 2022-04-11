const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// return all the indices (zero-based positions) in the string where each character is found
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (char === ' ') continue;

    if (results[char]) {
      results[char].push(i);
    } else {
      results[char] = [i];
    }
  }
  return results;
};

// test cases
//console.log("Final result:", letterPositions('hello'));
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("hello").o, [4]);
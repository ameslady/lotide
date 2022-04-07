// to be imported from other files eventually
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// takes a sentence (as a string) and returns a count of each of the letters in that sentence.
const countLetters = function(sentence) {
  let letterCount = {};

  for (const char of sentence) {
    if (char !== ' ') {
      letterCount[char] = (isNaN(letterCount[char]) ? 1 : letterCount[char] + 1);
    }
  }
  return letterCount;
};

// test cases
console.log(countLetters("LHL")); // { L: 2, H: 1};
console.log(countLetters("banana"));
console.log(countLetters("lighthouse in the house")); 
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }

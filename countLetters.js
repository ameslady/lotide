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
    if (!char.match(new RegExp(/[^a-zA-Z]+/g))) {
      letterCount[char] = (isNaN(letterCount[char]) ? 1 : letterCount[char] + 1);
    }
  }
  return letterCount;
};

// test cases
//console.log(countLetters("Hi, my name is Amy!!"));

const str1 = countLetters("LHL"); // { L: 2, H: 1};
assertEqual(str1["L"], 2);
assertEqual(str1["H"], 1); 

const str2 = countLetters("lighthouse in the house"); // { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1,}
assertEqual(str2["h"], 4); 
assertEqual(str2[" "], 3); 

const str3 = countLetters("Hi, my name is Amy!!!!"); // { H: 1, i: 2, m: 3, y: 2, n: 1, a: 1, e: 1, s: 1, A: 1 }
assertEqual(str3["!"], 1); 
assertEqual(str3[","], 1); 
assertEqual(str2[" "], 4); 
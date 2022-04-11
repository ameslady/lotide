const assertEqual = require('./assertEqual');

// scans the object and returns the first key that contains the given value.
// if no key with that given value is found, then it should return undefined.
const findKeyByValue = function(object, value) {
  let allKeys = Object.keys(object);

  for (const key of allKeys) {
    if (object[key] === value) {
      return key;
    }
  }
};

// test cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
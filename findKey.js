// to be imported from other files eventually
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// scan the object and return the first key for which the callback returns a truthy value. 
// if no key is found, then it should return undefined.
const findKey = function(object, callback){
   let keys = Object.keys(object);
   let result;

  for (const key of keys) {
    let value = object[key];

    if (callback(value)) {
      result = key;
      break;
    }
  }
  return result;
};


// test cases
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 5 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 9 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"


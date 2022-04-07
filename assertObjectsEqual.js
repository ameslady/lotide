// to be imported from other files eventually
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// to be imported from other files eventually
const eqObjects = function(obj1, obj2) {
  let objKeys1 = Object.keys(obj1);
  let objKeys2 = Object.keys(obj2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (const key of objKeys1) {
   
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      const val1 = obj1[key];
      const val2 = obj2[key];

      if (eqArrays(val1, val2)) {
        continue;
      } else if (val1 !== val2) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

// prints pass or fail assertions based on the equality of two objects
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// test cass
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const cd = { c: "1", d: "3" };
const dc = { c: "2", d: "4" };
assertObjectsEqual(cd, dc);

const fe = { c: "1", d: ["2", 3] };
const ef = { d: ["2", 3], c: "1" };
assertObjectsEqual(fe, ef);
const eqObjects = require('./eqObjects');

// prints pass or fail assertions based on the equality of two objects
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

// Test cases to be moved to their own file:
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba);

// const cd = { c: "1", d: "3" };
// const dc = { c: "2", d: "4" };
// assertObjectsEqual(cd, dc);

// const fe = { c: "1", d: ["2", 3] };
// const ef = { d: ["2", 3], c: "1" };
// assertObjectsEqual(fe, ef);
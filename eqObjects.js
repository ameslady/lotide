const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

// compares object data
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

module.exports = eqObjects;

/*
// test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const fe = { c: "1", d: "3" };
const gh = { c: "2", d: "4" };
assertEqual(eqObjects(fe, gh), false); // => false

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
*/
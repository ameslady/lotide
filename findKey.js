// scans the object and returns the first key for which the callback returns a truthy value
// if no key is found, then it should return undefined
const findKey = function(object, callback) {
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

module.exports = findKey;


// Test cases to be moved to their own file:
// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma");
// return a slice of the array with elements taken from the beginning."
// It should keep going until the callback/predicate returns a truthy value.
const takeUntil = function(array, callback) {
  let newArray = [];

  for (const num of array) {
    if(!callback(num)){
        newArray.push(num);        
    } else {
      break;
    }
  } 
  return newArray;
};

module.exports = takeUntil;


// Test cases to be moved to their own file:
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// Expected output:
// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
// assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);
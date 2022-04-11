const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]), 5); // pass
assertEqual(head([1,5,2]), 5); // fail
assertEqual(head(["Hello", "Ligthouse", "Labs"]), "Hello"); // pass
assertEqual(head([1]), 5); // single element array
assertEqual(head([]), 5); // empty array
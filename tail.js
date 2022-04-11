// returns the tail of an array (every element but the head)
const tail = function(array) {
  let arrayTail = array.slice(1);

  return arrayTail;
};

module.exports = tail;
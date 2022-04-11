// takes in an array and returns the middle-most element(s)
const middle = function(array) {
  let middleElms = [];
  let midPoint = array.length / 2;
  
  // handles arrays with no middle, returns empty array
  if (array.length <= 2) return [];

  // handles odd number of elements
  if (array.length % 2 === 1) {
    middleElms.push(array[Math.floor(midPoint)]);
    return middleElms;
  // handles even number of elements
  } else {
    middleElms.push(array[midPoint - 1]);
    middleElms.push(array[midPoint]);
    return middleElms;
  }
};

module.exports = middle;
// Description:
//   Implement a function that returns the minimal and the maximal value of a list (in this order).
//
// SOLUTION:
function getMinMax(arr) {
  return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)]
}

console.log(getMinMax([6, 2, 5, 3, 4]))
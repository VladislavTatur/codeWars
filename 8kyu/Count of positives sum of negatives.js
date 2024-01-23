// ОПИСАНИЕ:
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


//SOLUTION:
function countPositivesSumNegatives(input) {
  if (input === null) {
    return [];
  } else if (input.length <= 1) {
    return [];
  } else if (input !== null) {
    let positive = input.filter((num) => num > 0);
    let negative = input.filter((num) => num < 0);
    let sumNegative = negative.reduce((acc, c) => acc + c);
    let res = [positive.length, sumNegative];
    return res;
  } else if (sumNegative === 0) return []
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15, 0]))

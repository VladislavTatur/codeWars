// DESCRIPTION:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1 
// 2
//  +2 
// 2
//  +2 
// 2
//  =9.


//SOLUTION:
function squareSum(numbers) {
    let newArr = [];
    if (numbers.length === 0) {
      return 0;
    } else {
      for (let i = 0; i < numbers.length; i++) {
        newArr.push(Math.pow(numbers[i], 2));
      }
    }
    return newArr.reduce((i, v) => i + v);
  }
  
  console.log(squareSum([16, 0]));
  
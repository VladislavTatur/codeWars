// DESCRIPTION:
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

// SOLUTION:
function getSum(a, b) {
    let arr = [];
    if (a === b) {
      return a
    }
    if (a < b) {
      for (let i = a; i <= b; i++) {
          arr.push(a++)
      }
    } 
    else { 
      for (let q = b; q <= a; q++) {
          arr.push(b++)
      }
    
  }
    return arr.reduce((a, b) => a + b, 0)
  }
  
  console.log(getSum(10, 20));
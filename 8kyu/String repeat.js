// DESCRIPTION:
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.



// SOLUTION:

function repeatStr (n, s) {
    let newString = '';
    for (let i = 1; i <= n; i++) {
        newString = newString + s;
    } return newString;
  };
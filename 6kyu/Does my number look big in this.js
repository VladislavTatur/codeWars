// DESCRIPTION:
// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

// This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.


// SOLUTION:
function narcissistic(value) {
    let arr = value.toString().split('').map(Number).map((el, end, arr) => Math.pow(el, arr.length)).reduce((a, b) => a + b, 0)
    return arr === value
  }
  
  
  console.log(narcissistic(7))
// DESCRIPTION:
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

//SOLUTION:

var summation = function (num) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < num; i++) {
        a++;
        b += a;
    }
    return b
    }

  console.log(summation(4))
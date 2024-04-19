// DESCRIPTION:
// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.



// Note: n and p will always be strictly positive integers.

// SOLUTION:
function digPow(n, p){
    let numToArr = n.toString().split('')
    let sum = 0
    for (let i = p; i < numToArr.length + p; i++) {
      sum += Math.pow(numToArr[i - p], i)
    }
    const k = sum / n
    if (!Number.isSafeInteger(k)) {
      return -1
    }
    return sum === k * n ? k : -1
  }
  
  
    console.log(digPow(46288, 5))
   
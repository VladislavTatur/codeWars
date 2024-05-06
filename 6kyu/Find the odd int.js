// DESCRIPTION:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


// SOLUTION:
function findOdd(A) {
    const obj = {};
    A.map(a => {
      if (obj[a] !== undefined) {
        obj[a]++
      } else {
        obj[a] = 1
      }
    })
    const key = Object.keys(obj).find(key => obj[key] % 2 !== 0)
    return typeof key === 'string' ? key*1 : 0
  }
  
  console.log(findOdd([7]))
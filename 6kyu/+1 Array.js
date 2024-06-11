// DESCRIPTION:
// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer

// SOLUTION:
function upArray(arr) {
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] < 0 || arr[i] > 9 || arr.length <= 0) {
        return null
      }
    }
    const str = arr.join("");
    let bigInt = BigInt(str);
    bigInt++;
    let newArr = bigInt.toString().split("");
    let resArr = newArr.map((v) => Number(v));  
    if(resArr.length !== arr.length) {
      return resArr.join('').padStart(arr.length, 0).split('').map(v => Number(v))
    }
  
  return resArr
  }
  
  console.log(upArray([]));
  
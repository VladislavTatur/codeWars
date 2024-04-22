// DESCRIPTION:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


// SOLUTION:
function count(string) {
    const resObj = {};
    for (let i = 0; i < string.length; i++) {
      const current = string[i]
      if (resObj[current] !== undefined) {
        resObj[current]++
      } else {
        resObj[current] = 1
      }
    }
    return resObj
  }
  
  
  console.log(count('ABS'))
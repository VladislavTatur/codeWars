// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// SOLUTION:
function reverseWords(str) {
    let res = str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
    return res
    
  }


  console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))

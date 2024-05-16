// DESCRIPTION:
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


// SOLUTION:


function isPangram(string){
    const obj = {};
    const toLower = string.toLowerCase()
    for (let i = 0; i < toLower.length; i++) {
      const current = toLower[i]
      if (obj[current] === undefined) {
        obj[current] = 1
      }
    }
    const arr = Object.keys(obj)
    const onlyLetters = arr.filter(item => /^[a-zA-Z]+$/.test(item))
    return onlyLetters.length === 26
  }
  
  console.log(isPangram("The quick brown fox jumps over the lazy dog."))
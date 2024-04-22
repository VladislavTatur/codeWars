// DESCRIPTION:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// SOLUTION:
function duplicateEncode(word){
    const lower = word.toLowerCase()
    const obj = {}
    let res = ''
    for (let i = 0; i < word.length; i++) {
      const current = lower[i]
      if (obj[current] !== undefined) {
        obj[current]++
      } else {
        obj[current] = 1
      }
    }
    for (let j = 0; j < word.length; j++) {
      const current = lower[j]
      if (obj[current] > 1) {
        res += ')'
      } else {
        res += '('
      }
    }
  
    return res
  }
  
  
  console.log(duplicateEncode('Success'))
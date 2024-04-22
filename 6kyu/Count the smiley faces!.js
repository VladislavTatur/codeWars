// DESCRIPTION:
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]


// SOLUTION:
//return the total number of smiling faces in the array
function countSmileys(arr) {
    let res = 0;
    if (arr.length === 0) {
      return 0
    }
    arr.forEach(element => {
      if (element[0] === ':' || element[0] === ';') {
        if (element[1] === '~' || element[1] === '-') {
          if (element[2] === 'D' || element[2] === ')') {
            res++
          }
        } else if (element[1] === 'D' || element[1] === ')') {
          res++
        }
      }
    });
  return res
  }
  
  
  console.log(countSmileys([]))
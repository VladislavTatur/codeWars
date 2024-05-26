// DESCRIPTION:
// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"

// SOLUTION:
function toWeirdCase(string){
    let newStr = []
    let spl = string.split(' ')
    for (let i = 0; i < spl.length; i++) {
        if (i >= 1) {
        newStr.push(' ') }
        for (let j = 0; j < spl[i].length; j++) {
            if (j % 2 === 0) {
                newStr.push(spl[i][j].toUpperCase())
            } else {
                newStr.push(spl[i][j].toLowerCase())

            }
        }
    }
    
    return newStr.join('')
  }


  console.log(toWeirdCase('This is a test'))
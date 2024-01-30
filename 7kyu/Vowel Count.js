// DESCRIPTION: 
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


// SOLUTION:
function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let countVowels = 0
    for (let i = 0; i < str.length; i++) {
        for (let v = 0; v < vowels.length; v++) {
            if (str[i] === vowels[v]) {
                countVowels++
            }
        }
    }
    return countVowels
  }


  console.log(getCount("abracadabra"))

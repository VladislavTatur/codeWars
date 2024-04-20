// DESCRIPTION:
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// SOLUTION:
function high(x) {
    const alph = 'abcdefghijklmnopqrstuvwxyz'
    let strNum = []
    let num = 0
    for (let i = 0; i < x.length; i++) {
      const ind = alph.indexOf(x[i])
      if(ind !== -1) {
        num += (ind + 1)
      } else {
        strNum.push(num * 1)
        num = 0
      }
      if (i === x.length -1) {
        strNum.push(num * 1)
      }
    }
    let res = strNum.indexOf(Math.max(...strNum))
    return x.split(' ')[res]
  }
  
  console.log(high("take me to semynak"));
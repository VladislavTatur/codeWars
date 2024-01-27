// DESCRIPTION:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


//SOLUTION:
function longest(s1, s2) {
    let sumStrn = s1 + s2
    let newa = sumStrn.split('')
    const newSet = new Set(newa)
    const res = Array.from(newSet).sort().join('')

    return res
  }


  console.log(longest("aretheyhere", "yestheyarehere"))

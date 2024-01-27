// DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false



//SOLUTION:
function isIsogram(str){
    let strLower = str.toLowerCase().split('')
    const newSet = new Set(strLower)
    const res = Array.from(newSet).join('')
    return str.length === res.length
  }

  console.log(isIsogram(''))
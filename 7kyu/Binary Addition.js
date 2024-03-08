// DESCRIPTION:
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// SOLUTION:
function addBinary(a,b) {
    let res = [];
    let sum = a + b
    for (let i = 0; sum > 0; i++) {
        
        res.unshift(sum % 2)
        sum = Math.floor(sum / 2)
    
}
    return res.join('')
  }

  console.log(addBinary(1, 2))
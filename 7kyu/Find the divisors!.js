// DESCRIPTION:
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).


// SOLUTION:
function divisors(integer) {
  let res = [];
  for (let i = 2; i < integer; i++) {
    let q = integer / i
    if (Number.isInteger(q)) {
        res.unshift(q)
    } 
  }
  return res.length === 0 ? `${integer} is prime` : res
};


console.log(divisors(15))
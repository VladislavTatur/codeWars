// DESCRIPTION:
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

// SOLUTION:
function nbDig(n, d) {
    let res = 0;
    for (let i = 0; i <= n; i++) {
      let num = Math.pow(i, 2)
      let str = num.toString()
      for (let j = 0; j < str.length; j++) {
        if (str[j].indexOf(String(d)) !== -1) {
          res++
        }
      }
    }return res
  }
  console.log(nbDig(11011, 2))
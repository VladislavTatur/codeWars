// DESCRIPTION:
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// SOLUTION:
function persistence(num) {
    let numberDivision = num.toString().split('')
    let count = 0
    if (numberDivision.length > 1) {
        while (numberDivision.length > 1){
        numberDivision = numberDivision.reduce((e, i) => e * i).toString().split('')
        count++}
    }
    return count

 }


 console.log(persistence(999))
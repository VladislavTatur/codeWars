// DESCRIPTION:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// SOLUTION:
function createPhoneNumber(numbers){
    let number = ''
    for (let i = 0; i < numbers.length; i++) {
      if (number.length === 0) {
        number += '('
        i--
      } else if (number.length < 4) {
        number += numbers[i]
      } else if (number.length === 4) {
        number += ') '
        i--
      } else if (number.length < 9) {
        number += numbers[i]
      } else if (number.length === 9) {
        number += '-'
        i--
      } else {
        number += numbers[i]
      }
    }
    return number
  }
  
  
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
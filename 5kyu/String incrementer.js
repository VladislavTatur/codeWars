// DESCRIPTION:
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// SOLUTION:
function incrementString(strng) {
    let letter = "";
    let number = "";
    let rev = strng.split("").reverse().join("");
  
    for (let i = 0; i < strng.length; i++) {
      if(!isNaN(parseInt(rev[i]))) {
      if (isNaN(parseInt(rev[i + 1]))) {
        number += rev[i];
        letter += rev
          .split("")
          .splice(i + 1)
          .reverse()
          .join("");
        break;
      
      } else {
        number += rev[i];
      }
    }
  }
    if (number === "") {
      return strng + "1";
    }
    let newNumber = (parseInt(number.split("").reverse().join("")) + 1)
      .toString()
      .padStart(number.length, "0");
    return letter + newNumber;
  }
  
  console.log(incrementString("foo001"));
  
// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// high And Low("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


//SOLUTION:
function highAndLow(numbers){
    let sor = numbers.split(' ').sort((a, b) => b - a)
    return sor[0] + ' ' + sor[sor.length - 1]
    }

  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
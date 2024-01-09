// DESCRIPTION:
// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

// SOLUTION:

function booleanToString(b){
    let str = ''
    if(b === true) {
      str = 'true'
    } else {
        str = 'false'
    }
    return str
}
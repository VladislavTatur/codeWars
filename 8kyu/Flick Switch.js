// DESCRIPTION:
// Task
// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.


//  SOLUTION:
function flickSwitch(arr){
    let newArr = []
    let bool = true
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'flick') {
            newArr.push(bool)
        }else if (arr[i] === 'flick' && newArr[i - 1] === false) {
            bool = true
            newArr.push(bool)
        }

         else if (arr[i] === 'flick' ) { 
            bool = false
        newArr.push(bool)
        }
    } return newArr
}
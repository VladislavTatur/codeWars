// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


//SOLUTION:
function XO(str) {
    const toLower = str.toLowerCase();
    let qntX = 0;
    let qntO = 0;
    for (let i = 0; i < toLower.length; i++) {
        if (toLower[i] === 'x') {
            qntX++
        } else if (toLower[i] === 'o') {
            qntO++
        }
    }
    return qntO === qntX
}


console.log(XO('abc'))
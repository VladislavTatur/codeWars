// DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.

// SOLUTION:
function solution(string) {
    let str = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== string[i].toUpperCase()) {
            str += string[i]
        } else {
            str += ' '
            str += string[i]
        }
    }
    return str
}

  
  console.log(solution("camelCasingTest"))
// DESCRIPTION:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).



//SOLUTION:
function solution(str, ending){
    let newStr = '';

for (let i = 0; i < str.length - ending.length; i++) {
 newStr += str[i]
}

let comparison = str.replace(newStr, '');
if (comparison === ending) {
    return true
} return false
}


console.log(solution('VladIlona', 'onaa'))
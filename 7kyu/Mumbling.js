function reverseWords(str) {
    let newStr = '';
    if (str[0]) {
        newStr += str[0]}
    for (let i = 0; i < str.length; i++) {
       newStr += str[i].toUpperCase()
        newStr += str[i].repeat([i]).toLowerCase() + '-'
    }
    return newStr.slice(1, -1)
  }


  console.log(reverseWords('ZpglnRxqenU'))
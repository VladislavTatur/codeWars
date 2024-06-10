// DESCRIPTION:
// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// Don't forget to rate this kata! Thanks :)

// SOLUTION:
String.prototype.camelCase=function(){
    const words = this.split(' ')
    let strCamelCase = ''
    for (let i = 0; i < words.length; i ++) {
      strCamelCase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
    }
    return strCamelCase
  }
  
  console.log("camel case word".camelCase())
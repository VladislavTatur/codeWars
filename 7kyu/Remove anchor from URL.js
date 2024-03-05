// DESCRIPTION:
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// SOLUTION:
function removeUrlAnchor(url){
    let del = url.indexOf('#')
    if (del === -1) {
         return url
    } else  {return url.substring(0, del)}
  }
let out1 = 'www.codewars.com/katas/'
let out2 = 'www.codewars.com/katas/?page=1#about'

  console.log(removeUrlAnchor(out1))
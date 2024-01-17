// DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]


// SOLUTION:
const reverseSeq = n => {
let newArray = [];
for (let i = 1; i <= n; i++) {
    newArray.push(i)
}
newArray.reverse()
return newArray
};


  console.log(reverseSeq(5))
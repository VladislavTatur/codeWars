// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


// SOLUTION:
function moveZeros(arr) {
    const res = []
    const zer = []
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] === 0) {
        zer.push(arr[i])
      } else {
        res.push(arr[i])
      }
    }
    for(let j = 0; j < zer.length; j++) {
      res.push(0)
    }
  return res
  }
  console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
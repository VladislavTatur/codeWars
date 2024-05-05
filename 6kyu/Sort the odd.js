// DESCRIPTION:
// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.


// SOLUTION:
function sortArray(array) {
    const oddNum = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        oddNum.push(array[i]);
        array[i] = " ";
      }
    }
    oddNum.sort((a, b) => a - b);
    for (let j = 0; j < array.length; j++) {
      if (array[j] === " ") {
        array[j] = oddNum[0];
        oddNum.shift();
      }
    }
    return array;
  }
  
  console.log(sortArray([5, 3, 2, 8, 1, 4]));
  
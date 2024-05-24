// DESCRIPTION:
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)


// SOLUTION:
function findOutlier(integers){
    let even = '';
    let odd = '';
    integers.forEach(num => num % 2 === 0 ? even += num : odd+=num)
    return even.length > odd.length ? odd*1 : even*1
  }

  console.log(findOutlier([0, 1, 2]))
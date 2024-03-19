// DESCRIPTION:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// SOLUTION:
function findUniq(arr) {
	let newAr = arr.sort((a, b) => a -b)
	let ar = 0
	for (let i = 0; i < newAr.length; i++) {
		if (newAr[i] !== newAr[i+1] && i === 0)  {
			 ar = newAr[i]
			 return ar
		} else if (newAr[i] !== newAr[i+1]){
			ar = newAr[i+1]
			return ar
		}
	}
}
console.log(findUniq([ 3, 10, 3, 3, 3 ]))

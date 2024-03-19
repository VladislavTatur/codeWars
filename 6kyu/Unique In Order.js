// DESCRIPTION:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// SOLUTION:
var uniqueInOrder=function(iterable){
	let ar = []
	if (typeof iterable === 'string')
	{ar = iterable.split('')} else {ar = iterable}
	let res = [];
	ar.map((letter, index, arr) => {
		if(letter !== arr[index + 1]) {
			res.push(letter)
		} return
	})
	
return res  
}

console.log(uniqueInOrder([1,2,2,3,3]))
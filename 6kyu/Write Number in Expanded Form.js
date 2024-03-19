// DESCRIPTION:
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// SOLUTION:
function expandedForm(num) {
	let res = ''
	let zero = ''
	const numToStr = num.toString()
	for (let i = 0; i < numToStr.length; i++) {
		if (numToStr[i].charCodeAt() === 48) {
		} else
		{res += numToStr[i] + '0'.repeat(numToStr.length - i - 1) + ' + ' }
		
	}
	return res.slice(0, -3)
  }


console.log(expandedForm(70304))
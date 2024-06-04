// DESCRIPTION:
// Implement a function which behaves like the uniq command in UNIX.

// It takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance.

// Example:

// ["a", "a", "b", "b", "c", "a", "b", "c"]  =>  ["a", "b", "c", "a", "b", "c"]


// SOLUTION:
function uniq(a) {
    const res = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== a[i + 1]) {
        res.push(a[i])
      }
    }
    return res
  }
  
  console.log(uniq(['a','a','b','b','c','a','b','c','c']))
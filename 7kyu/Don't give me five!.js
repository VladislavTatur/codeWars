function dontGiveMeFive(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr.join(' ').replace(/\b\d*5\d*\b/g, '').split(' ').filter(a => a !== '').length+1
}

console.log(dontGiveMeFive(4, 17));

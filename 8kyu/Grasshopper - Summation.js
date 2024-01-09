var summation = function (num) {
    let a = 0;
    let b = 0;
    let c = 0;
    for (let i = 0; i < num; i++) {
        a++;
        b += a;
    }
    return b
    }

  console.log(summation(4))
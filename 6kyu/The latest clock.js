// DESCRIPTION:
// Write a function which receives 4 digits and returns the latest time of day that can be built with those digits.

// The time should be in HH:MM format.

// Examples:

// digits: 1, 9, 8, 3 => result: "19:38"
// digits: 9, 1, 2, 5 => result: "21:59" ("19:25" is also a valid time, but 21:59 is later)
// Notes
// Result should be a valid 24-hour time, between 00:00 and 23:59.
// Only inputs which have valid answers are tested.

//SOLUTION:
function latestClock(a, b, c, d) {
  let myArr = [a, b, c, d];
  let str = [];
  for (let i = 0; i < 4; i++) {
    let delIndex;
    if (i === 0) {
      let num = Math.max(...myArr.filter((v) => v <= 2));
      if (num === 2) {
        let newArr = myArr.filter((v, i) => i !== myArr.indexOf(num));
        console.log(newArr.filter((v) => v <= 5));

        if (newArr.filter((v) => v <= 5).length >= 2) {
          console.log("filtr1");
          if (
            newArr.filter((v) => v <= 3).length !== 0
          ) {
            console.log("filtr2");

            str.push(num);
          } else {
            num = Math.max(...myArr.filter((v) => v <= 1));
            str.push(num);
          }
        } else {
          num = Math.max(...myArr.filter((v) => v <= 1));
          str.push(num);
        }
      } else {
        num = Math.max(...myArr.filter((v) => v <= 1));
        str.push(num);
      }

      delIndex = myArr.indexOf(num);
    }

    if (i === 1) {
      let num;
      if (str[0] === 2) {
        num = Math.max(...myArr.filter((v) => v <= 3));
      } else {
        num = Math.max(...myArr.filter((v) => v <= 9));
      }
      str.push(num);

      delIndex = myArr.indexOf(num);
    }

    if (i === 2) {
      let num = Math.max(...myArr.filter((v) => v <= 5));
      str.push(num);
      delIndex = myArr.indexOf(num);
    }

    if (i === 3) {
      let num = Math.max(...myArr);
      str.push(num);
      delIndex = myArr.indexOf(num);
    }
    console.log(str);
    console.log(myArr);
    myArr.splice(delIndex, 1);
  }
  str.splice(2, 0, ":");
  return str.join("");
}

console.log(latestClock(2, 5, 1, 9));

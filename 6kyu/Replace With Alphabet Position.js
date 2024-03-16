// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.


// SOLUTION:
function alphabetPosition(text) {
  let res = [];
  const alf = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  text
    .toLowerCase()
    .split("")
    .forEach((e) => {
      if (!alf.includes(e)) {
        return;
      }
      res.push(alf.indexOf(e) + 1);
    });

  return res.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

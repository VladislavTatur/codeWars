// DESCRIPTION:
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// SOLUTION:
// return masked string
function maskify(cc) {
    const str = cc.length-4;
    let partOfTheLine = cc.substring(str)
    let res = ''
    for (let i = 0; i < str; i++) {
        res += '#'
    }
    return res + partOfTheLine
}

console.log(maskify('123456789'))
// DESCRIPTION:
// Introduction
// A grille cipher was a technique for encrypting a plaintext by writing it onto a sheet of paper through a pierced sheet (of paper or cardboard or similar). The earliest known description is due to the polymath Girolamo Cardano in 1550. His proposal was for a rectangular stencil allowing single letters, syllables, or words to be written, then later read, through its various apertures. The written fragments of the plaintext could be further disguised by filling the gaps between the fragments with anodyne words or letters. This variant is also an example of steganography, as are many of the grille ciphers. Wikipedia Link

// Tangiers1Tangiers2

// Task
// Write a function that accepts two inputs: message and code and returns hidden message decrypted from message using the code.
// The code is a nonnegative integer and it decrypts in binary the message.

// message : abcdef
// code    : 000101
// ----------------
// result  : df

// SOLUTION:
function grille(message, code) {
    let res = ''
    let binary = code.toString(2)
    if(message.length < binary.length) {
    const rev = binary.split('').reverse().join('')
    for (let i = 0; i < message.length; i++) {
      if (rev[i] === '1') {
        res += message[i]
      }
    } 
    } else {
      while (binary.length < message.length) {
        binary = '0' + binary
      }
      for(let j = 0; j < message.length; j++) {
        if(binary[j] === '1') {
          res += message[j]
        }
      }
    }
    return res
  }
  
  
  console.log(grille("tcddoadepwweasresd",77098))
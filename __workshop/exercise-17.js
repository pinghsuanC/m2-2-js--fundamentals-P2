// Exercise 17
//
// Write a function that takes two arguments (numbers), and returns an array of
// all of the Armstrong numbers between.
//
// a number of 1 digit; each digit is to the power of 1
// a number of 2 digit; each digit is to the power of 2
// a number of 3 digit; each digit is to the power of 3
// a number of 4 digit; each digit is to the power of 4
// a number of 5 digit; each digit is to the power of 5
//
// e.g.
// 4    --> 4^1 = 4
// 371  --> 3^3 + 7^3 + 1^3 = 371
// 8208 --> 8^4 + 2^4 + 0^4 + 8^4 = 8208
//
// See this site to learn more about Narcissistic (Armstrong) numbers.
// http://mathworld.wolfram.com/NarcissisticNumber.html
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function findArmstrongNumbers(num1, num2) {
  // num1 and num2 are Numbers
  // may comeback afterwards to change to recursion?

  let list = [];    // list to put all numbers in

  for(let n = num1; n<=num2; n++){      // assume num2 inclusive
    //check if n=0
    if(n===0){
      list.push(n);
      continue;   // go to next loop
    }else{    // when n is larger than 0
      // get each digits
      let n_cur = n;
      let sum = 0;           // find the digits and cube it and store here :D
      let base = 10;         // base 10 calculation
      let dig = 0;          // the number of digits need to check
      let all = [];         // save all the digits here :D

      while(n_cur!==0){      // loop until n_cur drops to 0
        let d = n_cur%base;  // e.g. 5142 % 10 = 2
        n_cur =(n_cur - d)/base;    // => and remove the digit from number. If drop to n_cur = 5, 5 - 5 / 10 = 0.
        all.push(d);                // => save the digit for later.
        dig++;                      // implement the number of digits.
      }

      all.forEach(element =>
        sum+=element**dig   // add power of that digit
      );

      if(sum===n){
        list.push(n);
      }
    }
  }
  return list;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(findArmstrongNumbers(0, 1000000));

// Create more test cases.
console.log(findArmstrongNumbers(0, 5000));
console.log(findArmstrongNumbers(0, 100000));

// This is needed for automated testing (more on that later)
module.exports = findArmstrongNumbers;

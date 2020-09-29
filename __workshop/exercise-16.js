// Exercise 16
//
// Write a JavaScript program that returns an array of ALL the numbers
// between two provided values, num1 and num2, that meet the following criteria.
//
// The sum of the cube of the digits of a number is equal to the number.
//
// e.g.
// 371 --> 3^3 + 7^3 + 1^3 = 371.

// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function findNumbers(num1, num2) {
  // num1 and num2 are Numbers
  //some cheking

  let list = [];    // list to put all numbers in

  for(let n = num1; n<=num2; n++){      // assume num2 inclusive
    //check if n=0
    if(n===0){
      list.push(n);
      continue;   // go to next loop
    }else{    // when n is larger than 0
      // get each digits
      let n_cur = n;
      let dig = 0;           // find the digits and cube it and store here :D
      let base = 10;         // base 10 calculation
      while(n_cur!==0){      // loop until n_cur drops to 0
        let d = n_cur%base;  // e.g. 5142 % 10 = 2
        dig += d**3;                // => and cube it 
        n_cur =(n_cur - d)/base;    // => and remove the digit from number. If drop to n_cur = 5, 5 - 5 / 10 = 0.
      }
      if(dig===n){
        list.push(n);
      }
    }
  }
  return list;
}

// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(findNumbers(0, 1000));

// Create more test cases.
console.log(findNumbers(0, 5000));
console.log(findNumbers(0, 100000));

// This is needed for automated testing (more on that later)
module.exports = findNumbers;

// Exercise 13
//
// Write a function that takes accepts a string and a letter as arguments
// and returns the number of times that the letter appears in the string
//
// Example countChar("the amazing spiderman", "a") returns 3.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countChar(str, char) {
  // str and char are both strings
  let c = 0;
  for(let n = 0; n<str.length; n++){
    if(str[n]===char){
      c++;
    }
  }
  return c;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(countChar("BananaBabyBubbles", "a"));

// Create more test cases.
console.log(countChar("the amazing spiderman", 'a'));
console.log(countChar("the amazing spiderman", "A"));
console.log(countChar("the amazing spiderman", " "));
console.log(countChar("the amazing spiderman", ""));
console.log(countChar("", ""));

// This is needed for automated testing (more on that later)
module.exports = countChar;

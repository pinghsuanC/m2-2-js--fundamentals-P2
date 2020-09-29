// Exercise 1.3
//
// Write a function that accepts a string of words
// and returns the character-count of that string. (include spaces)
//
// Example:
// characterCount("ab c def") should return 6
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function characterCount(string) {
  // complete the function
  // assume string has fine format.
  let l = string.split(" ");
  let r = 0;  // total count of char
  for(let n = 0; n<l.length; n++){
    r = r + l[n].length;
  }
  return r + l.length -1;  // number of space = toke -1
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(characterCount("wubba lubba dub dub"));

// Create more test examples.
console.log(characterCount("ab c def"));


// This is needed for automated testing (more on that later)
module.exports = characterCount;

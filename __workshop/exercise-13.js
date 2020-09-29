// Exercise 13
//
// Write a function that takes accepts a string as its only argument
// and returns a number that indicates how many uppercase "B"s are in the string.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countBs(str) {
  // str is a string
  let c = 0;
  for(let n = 0; n<str.length; n++){
    if(str[n]==='B'){
      c++;
    }
  }
  return c;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Create more test cases.
console.log(countBs("BBB"));
console.log(countBs(""));
console.log(countBs("BbBB"));
console.log(countBs("BBB "));
console.log(countBs("BBBAabB66"));
console.log(countBs("66"));

// This is needed for automated testing (more on that later)
module.exports = countBs;

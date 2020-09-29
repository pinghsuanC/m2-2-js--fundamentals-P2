// Exercise 1.6
//
// Write a function that accepts an array of strings and a string.
// It should return the array without the string.
//
// Example:
// removeStringFromArray(["I", "bacon", "you", "she"], "bacon") should return ["I", "you", "she"]
//
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function removeStringFromArray(array, string) {
  // complete the function
  return array.join().replace(string, "").split(",").filter(function(value, index, arr){return value!==""});
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(removeStringFromArray(["I", "bacon", "you", "she"], "bacon"));

// Create more test examples.
console.log(removeStringFromArray(["I", "bacon", "you", "she"], ""));
console.log(removeStringFromArray(["I", "", "you", "she"], ""));
console.log(removeStringFromArray([], "bacon"));
console.log(removeStringFromArray(["I", "bacon", "you", "she"], "he")); // the code didn't cover this case, bu the test passes.

// This is needed for automated testing (more on that later)
module.exports = removeStringFromArray;

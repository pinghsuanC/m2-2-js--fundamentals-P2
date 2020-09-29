// Exercise 5
//
// Write a function that takes an array and a value as arguments and
// returns true if the value is in the array else it returns false.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function itemIsPresent(array, item) {
  // code here
  return (array.findIndex((element)=>element===item) >0) ? true:false;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
// Test case
const myArray = [
  "bacon",
  "purple",
  "door",
  "window",
  "exist",
  "code",
  "program",
  "funky",
];

// Call the function to test your code.
console.log(itemIsPresent(myArray, "funky")); // true
console.log(itemIsPresent(myArray, "elephant")); // false

// Create more test cases
console.log(itemIsPresent(myArray, "")); // false

arr = [
  0,1,2,3
];
console.log(itemIsPresent(arr, ""));

// This is needed for automated testing (more on that later)
module.exports = itemIsPresent;

// Exercise 4
//
// Write a function that accepts 5 grades (positive numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(num1, num2, num3, num4, num5) {
  // code here
  let sum = num1+num2+num3+num4+num5;
  return Math.round(sum/5);
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
// Call the function to test your code.
console.log(calculateAverage(3, 1, 1, 1, 1));

// Create more test cases.
console.log(calculateAverage(3.5, 1.6, 1.4, 1.3, 1.3));
console.log(calculateAverage(3, 1, 1, 1, 1.4));
console.log(calculateAverage(3, 1, 1, 1, 1.5));
// This is needed for automated testing (more on that later)
module.exports = calculateAverage;

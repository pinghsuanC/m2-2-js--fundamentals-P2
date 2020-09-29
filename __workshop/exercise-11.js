// Exercise 11
//
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(grades) {
  // grades is an array of numbers
  if(grades.length===0){
    return 0;   // assume it's 0?
  }
  let s = 0;
  grades.forEach(element => {
    s = s + element;
  });
  return Math.round(s/grades.length);
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Create more test cases.
g1 = [1,2,3,4,5];
g2 = [2.5, 3, 1.4]
g3 = [];

console.log(calculateAverage(g1));
console.log(calculateAverage(g2));
console.log(calculateAverage(g3));

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;

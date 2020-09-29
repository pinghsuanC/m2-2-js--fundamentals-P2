// Exercise 12
//
// Write a function that accepts an array of grades (numerical values), calculates the average
// and returns the appropriate letter grade. (see below)
//
// Here is how I calculate the grades
// less than 60 is an F
// less than 70 is an D
// less than 80 is an C
// less than 90 is an B
// less than or equal to 100 is an A
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function getLetterGrade(grades) {

  // grades is an array of numbers
  if(grades.length===0){
    return 0;
  }

  let s = 0;
  grades.forEach(element => {
    s+=element;
  });
  s = s /grades.length;

  if(s<60){ // only one of them will be chosen
    return "F";
  }else if(s<70){
    return "D";
  }else if(s<80){
    return "C";
  }else if(s<90){
    return "B";
  }else if(s<=100){
    return "A";
  }else{
    return "Undefined grade: " + s;
  }

}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Create more test cases.
g1=[0,0,0,0,0]
g2=[];
g3=[100, 100, 100];
g4=[100, 150, 140];
g5=[89, 90, 45];
g6=[85, 85, 85];

console.log(getLetterGrade(g1));
console.log(getLetterGrade(g2));
console.log(getLetterGrade(g3));
console.log(getLetterGrade(g4));
console.log(getLetterGrade(g5));
console.log(getLetterGrade(g6));

// This is needed for automated testing (more on that later)
module.exports = getLetterGrade;

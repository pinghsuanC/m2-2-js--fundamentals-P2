// Exercise 1.4
//
// Write a function that accepts a name and returns the name as first name and last name.
// Remove the middle name, if there is one.
// - This function should still work if there is no middle name.
// - If the string has only one name, e.g. "Adele", it should return that name
// -  If there are multiple middle names this function should still work.
//
// Example:
// shortenName(Morty Antoine Smith") should return "Morty Smith"
// shortenName(Morty Smith") should return "Morty Smith"
// shortenName(Morty") should return "Morty"
// shortenName(Morty Antoine Fred Bacon Smith") should return "Morty Smith"

//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function removeMiddleName(string) {
  // complete the function
  let l = string.split(" ");
  let l_len = l.length;
  // check length of l
  
  if(l_len===1){
    // onle one
    return l[0];
  }else{
    return l[0] + " " + l[l_len-1]
  }
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(removeMiddleName("Morty Antoine Smith"));
// Create more test examples.
console.log(removeMiddleName("Morty Smith")); // no middle name
console.log(removeMiddleName("Morty")); // single name
// This is needed for automated testing (more on that later)
module.exports = removeMiddleName;

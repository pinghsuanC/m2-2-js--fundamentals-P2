// Exercise 10
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that returns true if every element of list is of length at least 5.
// Otherwise, it returns false.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function allLong(list) {
  // list is an array of strings
  //return (list.filter((ele, ind, arr)=>ele.length>=5).length===list.length && list.length>0) ? true:false;  // another method.
  let t = true;
  //check empty list
  if(list.length===0){
    return false;
  }
  list.forEach(element => {
    t = (element.length>=5) && t; // t will always be true, so if anyone is false t will become false.
  });
  return t;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Create more test cases.
// assume the format are all good.
l1=["abcde", 'aaaa', 'a', ''];
l2 = [];
l3=['ananan', 'iiii', 'donttt']
l4=['kkkkk', 'kkkkkk', 'ddddd']

console.log(allLong(l1));
console.log(allLong(l2));
console.log(allLong(l3));
console.log(allLong(l4));

// This is needed for automated testing (more on that later)
module.exports = allLong;

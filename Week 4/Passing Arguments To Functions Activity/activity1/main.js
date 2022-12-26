/*
Instructions
Compare Objects
- Define a function, `compareCities`, that accepts two objects as arguments.

compareCities({ name: 'Dresden' }, { name: 'Dresden' }) // -> true
compareCities({ name: 'Raleigh' }, { name: 'Raleigh', income_pc: 1200000 }) // -> false
*/
function compareCities(c1, c2) {
    // Add your code here
    let compareCities = Object.entries(c1, c2).every(([key, value]) => (c1, c2)[key] === value)
    return compareCities;
}
  //uncomment next lines to console log results
  console.log(compareCities({},{}))
  console.log(compareCities({name:'San Jose'},{name:'San Jose'}))
  console.log(compareCities({name:'San Jose'},{otherkey:'San Jose'}))
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = {
      compareCities,
    };
  }
  
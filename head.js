//Condensed assertEqual function down to using "require" to pull from original assertEqual file

const assertEqual = require('./assertEqual');

//Head 

function head(array) {
  return array[0];
}


module.exports = head;

// console.log([]);
// console.log(head([]));
// assertArraysEqual

// const eqArrays = require("./eqArrays");

// const assertArraysEqual = function(array1, array2) {
//   //use eqArrays function for the array comparisson
//   if (eqArrays(array1, array2)) {
//     console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
//   }
// };

//eqArrays

// const eqArrays = function(array1, array2) {
//     if (array1.length !== array2.length) {
//       return false;
//     }
//     for (let i = 0; i < array1.length; i++) {
//       // test 1: console.log("start of loop", array1[i]);
//       if (array1[i] !== array2[i]) {
//         //test 2: console.log("non match found", array1[i], array2[i]);
//         return false;
//       }
//     }
//     return true;
//   };

//letterPositions
const letterPositions = function(sentence) {

  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  //
  return results;
};

// TEST
letterPositions("lighthouse in the house");

//for c-type loop iterating array and .push each letter into respective position
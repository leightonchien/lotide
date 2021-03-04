//assertArraysEqual

//const eqArrays = require("./eqArrays");

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

const assertArraysEqual = require('./assertArraysEqual');

//middle

const middle = function(array) {
  let arrayResult = []; //initialize it to empty array
  if (array.length >= 2) {//only if array length > 2
    if (array.length % 2 === 0) {//for even array length
      arrayResult.push(array[((array.length) / 2) - 1]);
      arrayResult.push(array[(array.length) / 2]);
    } else {//for odd array length
      arrayResult.push(array[Math.floor(0.5 * array.length)]);
    }
  } return arrayResult;
};

//TEST//

middle([1])
middle([1, 2])

middle([1, 2, 3])
middle([1, 2, 3, 4, 5])

middle([1, 2, 3, 4])
middle([1, 2, 3, 4, 5, 6])
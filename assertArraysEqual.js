  const eqArrays = require("./eqArrays");

  const assertArraysEqual = function(array1, array2) {
    //use eqArrays function for the array comparisson
    if (eqArrays(array1, array2)) {
      console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    }
  };
  
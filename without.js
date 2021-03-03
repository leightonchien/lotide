const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  //use eqArrays function for the array comparisson
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};



const without = function(array, itemsToRemove) {
    let newArray = [];
    // iterate over the given array
    for (let i = 0; i < array.length; i++) {
      // iterate over the itemstoRemove array
      for (let x = 0; x < itemsToRemove.length; x++) {
        // if the element in the given array is equal to the element in the itemsToRemove array then break from the loop
        if (array[i] === itemsToRemove[x]) {
          break;
        }
        if (itemsToRemove.length - 1 === x) {
          newArray.push(array[i]);
          // Test to see what has been pushed for each test
          // console.log(newArray);
        }
      }
    }
    return newArray;
  };

  //TEST

  const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
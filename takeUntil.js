//eqArrays

const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      // test 1: console.log("start of loop", array1[i]);
      if (array1[i] !== array2[i]) {
        //test 2: console.log("fail", when array1[i], array2[i] aren't same length);
        return false;
      }
    }
    return true;
  };


//assertArraysEqual


const assertArraysEqual = function(array1, array2) {
  //use eqArrays function for the array comparisson
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

//takeUntil

const takeUntil = function(array, callback) {
    // iterate over the array
    let result = []
    for (let i = 0; i < array.length; i++) {
      
      if (callback(array[i])) {
        result.push(i);
        callback()
      }
    } //if condition is never met return the original array
    return result;
  };






//TEST

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
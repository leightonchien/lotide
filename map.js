//assertArraysEqual 

const assertArraysEqual = function(array1, array2) {
  //use eqArrays function for the array comparisson
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};


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


//map
//The map function will take in two arguments:
//  1. an array to map
//  2. a callback function

const map = function(array, callback) { 
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  };
  
  const words = ["ground", "control", "to", "major", "tom"];
  const colours = ["Blue", "Back", "Yellow", "Green"];
  const movies = ["Inception", "Joker", "Nemo"];
  
  assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  assertArraysEqual(map(colours, colour => colour[2]), ['u', 'c', 'l', 'e']);
  assertArraysEqual(map(movies, movie => movie[0]), ['Inception', 'Inception', 'Inception']); //Failed

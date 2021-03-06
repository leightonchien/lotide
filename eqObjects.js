//assertEqual 

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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



// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) { //input two objects, output true if both obj identical; false if not
    
    let key1 = Object.keys(object1); //let key1 become array of keys
    let key2 = Object.keys(object2); 

    if (key1.length !== key2.length) {
      return false; //check both objects for same length of Object.keys array
                    //we only need to check one set of keys, if they match then means same length!
    } else {
      for (let keys of key1) {  //iterate through keys of key1
        let newObj1 = object1[keys];
        let newObj2 = object2[keys];
        
        if (Array.isArray(newObj1) && Array.isArray(newObj2)) { //check if both input are NOT arrays
          return eqArrays(newObj1, newObj2); //
  
        } else {
          if (newObj1 !== newObj2) { //else if theyre arrays check if input NOT equal
            return false;
          }
        }
  
      }
      return true; //output true if no false is encountered in loop
    }
  };


//TEST

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true); // => true     //check if true(pass)/false(fail) when using eqObjects function
assertEqual(eqObjects(ab, abc), false); // => false
assertEqual(eqObjects(abc, ab), false); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
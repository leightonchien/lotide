// const assertEqual = function(actual, expected) {
//     if (actual === expected) {
//       console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//     } else {
//       console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//     }
//   };

const countLetters = function(sentence) {
    let str = sentence.split(" ").join("");
    const results = {};
  
    for (let i = 0; i < str.length; i++) {
      if (results[str[i]]) {
        results[str[i]] += 1;
      } else {
        results[str[i]] = 1;
      }
    }
    console.log(results);
    return results;
  };
    

// TEST
countLetters("lighthouse in the house");
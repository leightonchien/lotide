const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

//input genre and search for show returned by assertEqual function

const findKeyByValue = function(input,search) {
  for (let key of Object.keys(input)) {
    if (input[key].includes(search)) return key;
  }
  return;
};


const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
    documentary: "Formula 1",
    action: "Money Heist"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  assertEqual(findKeyByValue(bestTVShowsByGenre, "Formula 1"), "documentary");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "Money Heist"), "action");
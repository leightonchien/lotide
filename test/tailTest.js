//assertEqual and tail require  

const assertEqual = require("../assertEqual");
const tail = require("../tail");

//Tail

const result = tail(["Lighthouse", "Labs", "Week2", "Day1"]);

assertEqual(result[1], "Day1"); // Fail //index 1 should be Week2
assertEqual(result[0], "Labs"); // Pass //array index 0 start at Labs
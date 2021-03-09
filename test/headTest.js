const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([1, 2, 3]), 1); // Pass
assertEqual(head([10, 9, 8, 7]), 10); // Pass
assertEqual(head([6, 7, 80]), 7); // Fail
assertEqual(head([100, 50, 300]), ""); // Fail
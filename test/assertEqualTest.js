const assertEqual = require("../assertEqual");

assertEqual("ocean", "ocean"); // Pass
assertEqual("sunset", "sunrise"); // Fail
assertEqual("Lighthouse Labs", "Lighthouse Labs"); // Pass
assertEqual("Lighthouse labs", "Lighthouse Labs"); // Fail
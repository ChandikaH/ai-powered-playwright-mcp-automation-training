// Import the Lodash library
const _ = require('lodash');

// Use Lodash to find the maximum value in an array
let numbers = [10, 5, 100, 2, 1000];
let maxValue = _.max(numbers);

console.log("The maximum value is:", maxValue); // Output: The maximum value is: 1000
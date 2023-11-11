// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
let inventory = require('../root/cars');
let sortedModels = require('../root/problem3');

let sortedCars = sortedModels(inventory);

console.log(sortedCars);

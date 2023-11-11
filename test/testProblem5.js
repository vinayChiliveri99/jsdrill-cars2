// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
let years = require('../root/problem4');
let countCars = require('../root/problem5');

let carYears = years(require('../root/cars.js'));

let answer = countCars(carYears);

console.log(answer.count);

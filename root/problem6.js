// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

let inventory = require('../root/cars');

const onlyBmwAudi = (inventory) => {
  //   var bmwAudi = [];

  //   for (let i = 0; i < inventory.length; i++) {
  //     if (
  //       inventory[i].car_make === 'BMW' ||
  //       inventory[i].car_make === 'Audi'
  //     ) {
  //       bmwAudi.push(inventory[i]);
  //     }
  //   }

  const bmwAudi = inventory.filter((car) => {
    return car.car_make === 'BMW' || car.car_make === 'Audi';
  });

  return bmwAudi;
};

module.exports = onlyBmwAudi;

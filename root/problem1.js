// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
//"Car 33 is a *car year goes here* *car make goes here* *car model goes here*"

let inventory = require('../root/cars');

const getDetails = (id) => {
  console.log(
    `Car ${id} is a ${inventory[id - 1].car_year} ${
      inventory[id - 1].car_make
    } ${inventory[id - 1].car_model}`
  );
};

module.exports = getDetails;

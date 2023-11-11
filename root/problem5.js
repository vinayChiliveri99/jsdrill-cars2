// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

const findOlderCars = (years) => {
  //   const oldCars = [];
  //   for (let i = 0; i < years.length; i++) {
  //     if (years[i] < 2000) {
  //       oldCars.push(years[i]);
  //     }
  //   }

  const oldCars = years.filter((year) => {
    return year < 2000;
  });

  return { count: oldCars.length };
};

module.exports = findOlderCars;

// Exercise 2: Population density report
//
// Return all countries with population density above 300 people per square km.
// Sort from highest density to lowest density.
// Each item should include: name, region, density rounded to 1 decimal place.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const countries = require('../data/countries.json');

const lodashSolution = _.chain(countries)
  .forEach(
    (country) =>
      (country.density = Math.round((country.population / country.area) * 10) / 10),
  )
  .filter((country) => {
    return country.density > 300;
  })
  .orderBy(['density'], ['desc'])
  .map((country) => ({
    name: country.name,
    region: country.region,
    density: country.density,
  }))
  .value();

console.log(lodashSolution);

/*
Expected output:
[
  { name: 'Rwanda', region: 'Africa', density: 535.1 },
  { name: 'India', region: 'Asia', density: 434.6 },
  { name: 'Japan', region: 'Asia', density: 326.2 }
]
*/

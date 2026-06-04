// Exercise 18: Regions by population
//
// Group countries by region.
// Return only regions that have at least 3 countries.
// For each region, return:
// - region
// - countryCount
// - totalPopulation
//
// Sort by totalPopulation descending.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const countries = require('../data/countries.json');

const lodashSolution = _.chain(countries)
  .groupBy('region')
  .filter((group) => _.size(group) >= 3)
  .map((group) => ({
    region: group[0].region,
    countryCount: _.size(group),
    totalPopulation: _.sumBy(group, 'population'),
  }))
  .orderBy('totalPopulation', 'desc')
  .value();

console.log(lodashSolution);

/*
Expected output:
[
  { region: 'Asia', countryCount: 4, totalPopulation: 3255127650 },
  { region: 'Africa', countryCount: 21, totalPopulation: 1173458608 },
  { region: 'Americas', countryCount: 4, totalPopulation: 723655867 },
  { region: 'Europe', countryCount: 4, totalPopulation: 274658781 }
]
*/

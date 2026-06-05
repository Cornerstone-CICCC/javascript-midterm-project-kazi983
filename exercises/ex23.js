// Exercise 23: Award-winning movies by country
//
// Use only movies that have at least one award.
// Group them by country.
// For each country, return:
// - country
// - awardWinningMovieCount
// - titles sorted alphabetically
//
// Sort by awardWinningMovieCount descending, then country alphabetically.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const movies = require('../data/movies.json');

const lodashSolution = _.chain(movies)
  .groupBy('country')
  .map((countryGroup) => ({
    country: countryGroup[0].country,
    awardWinningMovieCount: _.chain(countryGroup)
      .reduce((sum, movie) => (movie.awards.length > 0 ? sum + 1 : sum), 0)
      .value(),
    titles: _.chain(countryGroup)
      .filter((movie) => movie.awards.length > 0)
      .map((movie) => movie.title)
      .sort()
      .value(),
  }))
  .filter('awardWinningMovieCount', true)
  .sortBy('country')
  .orderBy('awardWinningMovieCount', 'desc')
  .value();

console.log(lodashSolution);

/*
Expected output:
[
  {
    country: 'Japan',
    awardWinningMovieCount: 3,
    titles: [ 'Harbor Lights', 'Moonlit Train', 'Paper Lanterns' ]
  },
  {
    country: 'United Kingdom',
    awardWinningMovieCount: 3,
    titles: [ 'Blue Witness', 'Glass Meadow', 'Pixel Parade' ]
  },
  {
    country: 'United States',
    awardWinningMovieCount: 3,
    titles: [ 'Iron Valley', 'Orbit Kids', 'Solar Drift' ]
  },
  {
    country: 'Canada',
    awardWinningMovieCount: 2,
    titles: [ 'North Harbor', 'Silent Circuit' ]
  },
  {
    country: 'Italy',
    awardWinningMovieCount: 2,
    titles: [ 'Golden Steps', 'Hidden Recipe' ]
  },
  {
    country: 'Norway',
    awardWinningMovieCount: 2,
    titles: [ 'Stone Horizon', 'Winter Compass' ]
  }
]
*/

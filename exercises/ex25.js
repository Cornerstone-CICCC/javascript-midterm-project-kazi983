// Exercise 25: Best movie from each decade
//
// Group movies into decades using releaseYear.
// Examples: 2014 becomes "2010s", 2022 becomes "2020s".
// For each decade, return the highest-rated movie.
// Each item should include: decade, title, releaseYear, rating.
// Sort by decade alphabetically.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const movies = require('../data/movies.json');

const lodashSolution = _.chain(movies)
  .forEach(
    (movie) =>
      (movie.decade = `${_.slice(movie.releaseYear.toString(), (start = 0), (end = 3)).join('')}0s`),
  )

  .groupBy('decade')

  .map((decadeGroup) => {
    const topRatedMovie = _.chain(decadeGroup).orderBy('rating', 'desc').head().value();

    return {
      decade: decadeGroup[0].decade,
      title: topRatedMovie.title,
      releaseYear: topRatedMovie.releaseYear,
      rating: topRatedMovie.rating,
    };
  })

  .sortBy('decade')

  .value();

console.log(lodashSolution);

/*
Expected output:
[
  { decade: '2010s', title: 'North Harbor', releaseYear: 2018, rating: 8.1 },
  { decade: '2020s', title: 'Solar Drift', releaseYear: 2022, rating: 8.4 }
]
*/

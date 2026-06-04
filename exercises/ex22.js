// Exercise 22: Streaming catalog counts
//
// Count how many movies are available on each streaming service.
// Return services with at least 5 movies.
// Each item should include: service, movieCount.
// Sort by movieCount descending, then service alphabetically.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const movies = require('../data/movies.json');

const lodashSolution = null;

console.log(lodashSolution);

/*
Expected output:
[
  { service: 'Streamly', movieCount: 13 },
  { service: 'CineMax', movieCount: 11 },
  { service: 'ViewPlus', movieCount: 10 },
  { service: 'LaughBox', movieCount: 6 }
]
*/

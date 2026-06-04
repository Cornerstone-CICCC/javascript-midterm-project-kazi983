// Exercise 21: Directors with at least 3 movies
//
// Group movies by director.
// Return only directors with at least 3 movies.
// For each director, return:
// - director
// - movieCount
// - titles sorted alphabetically
//
// Sort by movieCount descending, then director alphabetically.
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
  {
    director: 'Carlos Vega',
    movieCount: 4,
    titles: [ 'Dust and Thunder', 'Neon Badge', 'Red District', 'Weekend Volcano' ]
  },
  {
    director: 'Hugo Larsen',
    movieCount: 4,
    titles: [ 'Castle Switch', 'Stone Horizon', 'The Small Planet', 'Winter Compass' ]
  },
  {
    director: 'Maya Chen',
    movieCount: 4,
    titles: [ 'Deep Signal', 'Orbit Kids', 'Rocket Garden', 'Solar Drift' ]
  },
  {
    director: 'Nora Patel',
    movieCount: 4,
    titles: [ 'Blue Witness', 'Glass Meadow', 'River of Glass', 'The Last Orchard' ]
  },
  {
    director: 'Aiko Tanaka',
    movieCount: 3,
    titles: [ 'Harbor Lights', 'Moonlit Train', 'Paper Lanterns' ]
  },
  {
    director: 'Ari Kim',
    movieCount: 3,
    titles: [ 'North Harbor', 'Quiet Evidence', 'Silent Circuit' ]
  },
  {
    director: 'Emma Wilson',
    movieCount: 3,
    titles: [ 'Bright Tuesday', 'Laughing Map', 'Pixel Parade' ]
  },
  {
    director: 'Sofia Rossi',
    movieCount: 3,
    titles: [ 'Cafe Midnight', 'Golden Steps', 'Hidden Recipe' ]
  }
]
*/

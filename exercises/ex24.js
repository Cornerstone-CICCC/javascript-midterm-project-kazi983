// Exercise 24: Runtime buckets
//
// Put movies into these runtime buckets:
// - "short" for runtime under 100 minutes
// - "standard" for runtime from 100 to 119 minutes
// - "long" for runtime 120 minutes or more
//
// For each bucket, return:
// - bucket
// - movieCount
// - titles sorted alphabetically
//
// Sort buckets in this order: short, standard, long.
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
    bucket: 'short',
    movieCount: 9,
    titles: [
      'Bright Tuesday',
      'Cafe Midnight',
      'Castle Switch',
      'Hidden Recipe',
      'Laughing Map',
      'Orbit Kids',
      'Pixel Parade',
      'Rocket Garden',
      'Weekend Volcano'
    ]
  },
  {
    bucket: 'standard',
    movieCount: 16,
    titles: [
      'Blue Witness',
      'Dust and Thunder',
      'Glass Meadow',
      'Golden Steps',
      'Harbor Lights',
      'Metro Chase',
      'Moonlit Train',
      'Neon Badge',
      'North Harbor',
      'Paper Lanterns',
      'Quiet Evidence',
      'Red District',
      'River of Glass',
      'The Last Orchard',
      'The Small Planet',
      'Winter Compass'
    ]
  },
  {
    bucket: 'long',
    movieCount: 5,
    titles: [
      'Deep Signal',
      'Iron Valley',
      'Silent Circuit',
      'Solar Drift',
      'Stone Horizon'
    ]
  }
]
*/

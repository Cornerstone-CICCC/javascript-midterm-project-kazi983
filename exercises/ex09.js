// Exercise 9: Reorder candidates
//
// Find active products that may need reordering.
// A product needs reordering when stock is below 25 and it is not discontinued.
// Return: id, name, supplier, stock, totalUnitsSold.
// Sort by stock ascending, then totalUnitsSold descending.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const products = require('../data/products.json');

const lodashSolution = _.chain(products)
  .reject(['discontinued', true])
  .reject((product) => product.stock >= 25)
  .map((product) => ({
    id: product.id,
    name: product.name,
    supplier: product.supplier,
    stock: product.stock,
    totalUnitsSold: _.chain(product.sales).values().sum().value(),
  }))
  .orderBy(['stock', 'asc', 'totalUnitsSold', 'desc'])
  .value();

console.log(lodashSolution);

/*
Expected output:
[
  {
    id: 'P-1027',
    name: 'Standing Desk Basic',
    supplier: 'OfficeDepot Pro',
    stock: 9,
    totalUnitsSold: 107
  },
  {
    id: 'P-1026',
    name: 'Drawing Tablet S',
    supplier: 'ScreenHub',
    stock: 12,
    totalUnitsSold: 160
  },
  {
    id: 'P-1017',
    name: 'Adjustable Dumbbell',
    supplier: 'ActiveSupply',
    stock: 15,
    totalUnitsSold: 192
  },
  {
    id: 'P-1003',
    name: 'Studio Monitor 27',
    supplier: 'ScreenHub',
    stock: 18,
    totalUnitsSold: 232
  },
  {
    id: 'P-1010',
    name: 'Air Purifier Mini',
    supplier: 'CleanAir Co',
    stock: 20,
    totalUnitsSold: 245
  },
  {
    id: 'P-1013',
    name: 'Rain Shell Jacket',
    supplier: 'TrailWorks',
    stock: 22,
    totalUnitsSold: 343
  }
]
*/

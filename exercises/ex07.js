// Exercise 7: Quarterly sales winners
//
// For each category, find the product with the highest total yearly unit sales.
// Total yearly sales = q1 + q2 + q3 + q4.
// Return one item per category with: category, productName, totalUnits.
// Sort from highest totalUnits to lowest.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const products = require('../data/products.json');
const { colorNames } = require('chalk');

const lodashSolution = _.chain(products)
  .groupBy('category')

  .map((categoryGroup) => {
    const topProductObj = _.chain(categoryGroup)
      .map((product) => ({
        productName: product.name,
        totalUnits: _.chain(product.sales).values().sum().value(),
      }))
      .orderBy('totalUnits', 'desc')
      .head()
      .value();

    return {
      category: categoryGroup[0].category,
      productName: topProductObj.productName,
      totalUnits: topProductObj.totalUnits,
    };
  })

  .orderBy('totalUnits', 'desc')

  .value();

console.log(lodashSolution);

/*
Expected output:
[
  { category: 'Grocery', productName: 'Espresso Beans 1kg', totalUnits: 1505 },
  { category: 'Stationery', productName: 'Notebook 3 Pack', totalUnits: 1325 },
  { category: 'Electronics', productName: 'Metro Mouse', totalUnits: 1295 },
  { category: 'Outdoor', productName: 'Insulated Bottle', totalUnits: 1003 },
  { category: 'Fitness', productName: 'Resistance Band Kit', totalUnits: 1001 },
  { category: 'Travel', productName: 'Packing Cube Set', totalUnits: 686 },
  { category: 'Home', productName: 'Cast Iron Pan', totalUnits: 563 }
]
*/

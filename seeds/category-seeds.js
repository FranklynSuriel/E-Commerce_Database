// require the model
const { Category } = require('../models');

// create an array of objects with some data for category_name
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// seed the category table
const seedCategories = () => Category.bulkCreate(categoryData);

// export the module
module.exports = seedCategories;

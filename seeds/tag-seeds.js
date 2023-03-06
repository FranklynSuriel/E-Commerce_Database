// require the model
const { Tag } = require('../models');

// create an array of objects with some data for tag_name
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

// seed the category table
const seedTags = () => Tag.bulkCreate(tagData);

// export the module
module.exports = seedTags;

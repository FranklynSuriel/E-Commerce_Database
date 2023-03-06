// import Packages and models
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// create the route for get all categories
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    // response with a 200 status and the category data
    res.status(200).json(categoryData);

  } catch (err) { //manage any error
    res.status(500).json(err);
  }
});

// create the route for get a category by id
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    // if id is not valid/found send a message
    if (!categoryData) {
      res.status(404).json({ message: "No category found with this id, please try another id." });
      return;
    }
    // response with a 200 status and the category data
    res.status(200).json(categoryData);
  } catch (err) { //manage any error
    res.status(500).json(err);
  }
});

// create the route for create (post) a category
router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);

    // response with a 200 status and the category data
    res.status(200).json(categoryData);

  } catch (err) { //manage any error
    res.status(500).json(err);
  }
});

// create the route for update (put) a category
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    // if id is not valid/found send a message
    if (!categoryData) {
      res.status(404).json({ message: "No category found with this id, please try another id." });
      return;
    }
    // response with a 200 status and the category data
    res.status(200).json(categoryData);
  } catch (err) { // manage any error
    res.status(500).json(err);
  }
});

// create the route for delete (delete) a category by id
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    // if id is not valid/found send a message
    if (!categoryData) {
      res.status(404).json({ message: "No category found with this id, please try another id." });
      return;
    }
    // response with a 200 status and the category data
    res.status(200).json(categoryData)
  } catch (err) { //manage any error
    res.status(500).json(err);
  }
});

// Export the module
module.exports = router;

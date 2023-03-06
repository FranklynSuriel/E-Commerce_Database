// import Packages and models
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { sync } = require('../../models/Product');

// The `/api/tags` endpoint
// create the route for get all tags
router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }]
    });
    // response with a 200 status and the tag data
    res.status(200).json(tagData);

  } catch (err) { //manage any error
    res.status(500).json(err);
  }
});

// create the route for get a tag by id
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    // if id is not valid/found send a message
    if (!tagData) {
      res.status(404).json({ message: " No Tag found with this id, Please try again " });
      return;
    }

    // response with a 200 status and the tag data
    res.status(200).json(tagData);

  } catch (err) { //manage any error
    res.status(500).json(err);
  }
});

// create the route for create (post) a tag
router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);

    // response with a 200 status and the tag data
    res.status(200).json(tagData);

  } catch (err) { // manage any error
    res.status(500).json(err);
  }
});

// create the route for update (put) a tag
router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    // if id is not valid/found send a message
    if (!tagData) {
      res.status(404).json({ message: " No Tag found with this id, Please try again " });
      return;
    }

    // response with a 200 status and the tag data
    res.status(200).json(tagData);

  } catch (err) { // manage any error
    res.status(500).json(err);
  }
});

// create the route for delete (delete) a tag by id
router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    // if id is not valid/found send a message
    if (!tagData) {
      res.status(404).json({ message: " No tag found with this id, please try another id." });
      return;
    }

    // response with a 200 status and the tag data
    res.status(200).json(tagData)

  } catch (err) { // manage any error
    res.status(500).json(err);
  }
});

// Export the module
module.exports = router;

const router = require('express').Router();
const { Categories, Products } = require('../../models');

//end point is /api/categories

//api/categories/ will fetch all the available categories + products that are under that category
router.get('/', async (req, res) => {
  try {
    const categoriesData = await Categories.findAll({
      include: [{ model: Products }],
    });
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
    return;
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryById = await Categories.findByPk(req.params.id, {
      //we need to require the Product table to view all the products under the specific category ID
      include: [{ model: Products }],
    });
    //checks to see if the category id exists, if not, send a status 404 and its message
    if (!categoryById) {
      return res.status(404).json({
        message:
          'This category ID does not exist. Please enter a valid category ID!',
      });
    }
    res.status(200).json(categoryById);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//create a new category
// payload must be sent in this format:
// {
//"category_name": "Keyboards"
// }
router.post('/', async (req, res) => {
  try {
    const createCategory = await Categories.create({
      //only parameter available here is the category name as the ID is auto incremented.
      category_name: req.body.category_name,
    });
    res.status(200).json(createCategory);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//update a category using its category_id
router.put('/:id', async (req, res) => {
  try {
    const checkCategoryId = await Categories.findByPk(req.params.id);
    const updateCategory = await Categories.update(
      { category_name: req.body.category_name },
      { where: { category_id: req.params.id } }
    );
    if (!checkCategoryId) {
      return res.status(404).json({
        message:
          'This category ID does not exist. Please enter a valid category ID!',
      });
    }
    res.status(200).json(updateCategory);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Categories.destroy({
      where: { category_id: req.params.id },
    });
    //error handling for when user inputs a category_id that does not exist
    if (!deletedCategory) {
      return res.status(404).json({
        message: 'This category ID does not exist. Please enter a valid category ID!',
      });
    }
    res.status(200).json(deletedCategory);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;

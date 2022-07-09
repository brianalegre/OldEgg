const router = require('express').Router();
const { Categories, Products } = require('../../models');

//end point of /api/products

router.get('/', async (req, res) => {
  try {
    const productsData = await Products.findAll({
      include: [{ model: Categories }],
    });
    res.status(200).json(productsData);
  } catch (err) {
    res.status(500).json(err);
    return;
  }
});

router.get('/:id', async (req, res) => {
  try {
    const productById = await Products.findByPk(req.params.id, {
      include: [{ model: Categories }],
    });
    if (!productById) {
      return res.status(404).json({
        message:
          'This product ID does not exist. Please enter a valid product ID!',
      });
    }
    res.status(200).json(productById);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const createProduct = await Products.create({
      product_name: req.body.product_name,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock,
      category_id: req.body.category_id,
      //date needs to be a string in the format of 'YYYY-MM-DD'
      date_posted: req.body.date_posted,
      product_img: req.body.product_img,
    });
    res.status(200).json(createProduct);
  } catch (err) {
    return res.status(400).json(err);
  }
});

//delete a product by its product_id
router.delete('/:id', async (req, res) => {
  try {
    const deleteProduct = await Products.destroy({
      where: { product_id: req.params.id },
    });
    if (!deleteProduct) {
      return res.status(404).json({
        message:
          'This product ID does not exist. Please enter a valid product ID!',
      });
    }
    res.status(200).json(deleteProduct);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;

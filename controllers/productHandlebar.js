const router = require('express').Router();
const { Products, Categories } = require('../models');

router.get('/products/:id', async (req, res) => {
  try {
    const productById = await Products.findByPk(req.params.id, {
      include: [{ model: Categories }],
    });
    if (!productById) {
      return res.status(404).json({
        message:
          'This Product ID does not exist. Please enter a valid product ID!',
      });
    }
    // res.status(200).json(productById);
    const products = productById.get({ plain: true });
    res.render('singleproduct', {
      products,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
const router = require('express').Router();
const { Carts } = require('../../models');

//end point of /api/carts

router.get('/', async (req, res) => {
  try {
    const cartsData = await Carts.findAll({
      //this parameter will include all associated tables, as well as nested tables
      include: [{ all: true, nested: true }],
    });
    res.json(cartsData);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const cartById = await Carts.findByPk(req.params.id, {
      include: [{ all: true, nested: true }],
    });
    if (!cartById) {
      return res.status(404).json({
        message: 'This cart ID does not exist. Please enter a valid cart ID!',
      });
    }
    res.status(200).json(cartById);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const createCart = await Carts.create({
      user_id: req.body.user_id,
      product_id: req.body.product_id,
      total_price: req.body.total_price,
    });
    res.status(200).json(createCart);
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteCart = await Carts.destroy({
      where: { cart_id: req.params.id },
    });
    if (!deleteCart) {
      return res.status(404).json({
        message: 'This cart ID does not exist. Please enter a valid cart ID!',
      });
    }
    res.status(200).json(deleteCart);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;

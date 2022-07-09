const router = require('express').Router();
const { Categories, Products } = require('../models');

//end point of /categories

router.get('/categories', async (req, res) => {
  try {
    const categoriesData = await Categories.findAll({
      include: [{ model: Products }],
    });

    const categories = categoriesData.map((category) =>
      category.get({ plain: true })
    );
    res.render('categoriespage', {
      categories,
      cart_count: req.session.cart_count,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one category

router.get('/categories/:id', async (req, res) => {
  try {
    const categoriesData = await Categories.findByPk(req.params.id, {
      include: [{ model: Products }],
    });
    if (!categoriesData) {
      return res.status(404).json({
        message:
          'This Category ID does not exist. Please enter a valid product ID!',
      });
    }
    // res.status(200).json(categoriesData);
    const categories = categoriesData.get({ plain: true });
    res.render('categoriespage', {
      categories,
      logged_in: req.session.logged_in,
      cart_count: req.session.cart_count,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

const router = require('express').Router();
const { Categories, Products } = require('../../models');
const { Op } = require('sequelize');


//end point of /categories

router.get('/:product_searched', async (req, res) => {
  try {
    // console.log('THIS IS THE SEARCH TERM:', req.params.product_searched);
    const productSearch = await Products.findAll({
      include: [{ model: Categories }],
      where: {
        [Op.or]: [
          {
            product_name: {
              [Op.like]: `%${req.params.product_searched}%`,
            },
          },
          {
            description: {
              [Op.like]: `%${req.params.product_searched}%`,
            },
          },
        ],
      },
    });
    // If no products are found, return a 404 error
    // if (!productSearch) {
    //   res.render('notFound');
    // }
    // console.log('BACKEND productSearch----', productSearch);
    const products = productSearch.map((product) =>
      product.get({ plain: true })
    );
    // console.log('BACKEND products----', products);
    res.render('searchPage', {
      products,
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

const router = require('express').Router();
const { Categories, Products } = require('../../models');



// // Query Products based on query parameters
// router.get('/:query', async (req, res) => {
//   console.log('I AM CALLED');
//   try {
//     // Get search query from the request
//     const queryString = req.params.query;
//     // Log the query string
//     console.log('THIS IS THE QUERYSTRING ---', queryString);
//     const productdata = await Products.query(
//       'SELECT * FROM products WHERE product_name LIKE ?',
//       {
//         replacements: [`%${queryString}%`],
//         type: Products.SELECT
//       }
//     );

//     res.status(200).json(productdata);
//   } catch (err) {
//     res.status(500).json(err);
//     return;
//   }
// });

// Query Products based on query parameters
router.get('/:query', async (req, res) => {
  console.log('I AM CALLED');
  try {
    // Get search query from the request
    const queryString = req.params.query;
    // Log the query string
    console.log('THIS IS THE QUERYSTRING ---', queryString);
    const productdata = await Products.findByPk(req.params.query, {
      where: {
        product_id: {
          [Op.or]: `%${queryString}%`
        }
      }
    });
    res.status(200).json(productdata);
  } catch (err) {
    res.status(500).json(err);
    return;
  }
});

router.get('/:query', async (req, res) => {
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









module.exports = router;

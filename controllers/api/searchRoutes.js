// const router = require('express').Router();
// const { Categories, Products } = require('../../models');
// const { Op } = require('sequelize');
// //end point of /api/products


// router.get('/:product_searched', async (req, res) => {
//   try {
//     const productSearch = await Products.findAll({
//       include: [{ model: Categories }],
//       where: {
//         [Op.or]: [
//           {
//             product_name: {
//               [Op.like]: `%${req.params.product_searched}%`,
//             },
//           },
//           {
//             description: {
//               [Op.like]: `%${req.params.product_searched}%`,
//             },
//           },
//         ],
//       },
//     });
//     console.log('BACKEND ----', productSearch);
//     res.status(200).json(productSearch);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// });

// module.exports = router;
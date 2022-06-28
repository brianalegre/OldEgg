//THIS index file is the entry point of our API(data) routes,
//it will bring in all api routes and export 1 router middleware
const router = require('express').Router();

const userRoutes = require('./userRoutes');
router.use('/', userRoutes);

const categoriesRoutes = require('./categoriesRoutes');
const productsRoutes = require('./productsRoutes');
const usersRoutes = require('./usersRoutes');
const cartsRoutes = require('./cartsRoutes');

router.use('/categories', categoriesRoutes);
router.use('/products', productsRoutes);
router.use('/users', usersRoutes);
router.use('/carts', cartsRoutes);

module.exports = router;

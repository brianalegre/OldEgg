//THIS index file is the entry point of our API(data) routes,
//it will bring in all api routes and export 1 router middleware
const router = require('express').Router();
const categoriesRoutes = require('./categoriesRoutes');
const productsRoutes = require('./productsRoutes');
const usersRoutes = require('./usersRoutes');
const cartsRoutes = require('./cartsRoutes');
// const searchRoutes = require('./searchRoutes');
// const searchHandlebar = require('./searchHandlebar');

router.use('/categories', categoriesRoutes);
router.use('/products', productsRoutes);
router.use('/users', usersRoutes);
router.use('/carts', cartsRoutes);
// router.use('/search', searchRoutes);
// router.use('/search', searchHandlebar);

module.exports = router;

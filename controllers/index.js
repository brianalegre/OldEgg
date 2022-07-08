const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const categoryHandlebar = require('./categoryHandlebar');
const productHandlebar = require('./productHandlebar');
const cartHandlebar = require('./cartHandlebar');
const searchHandlebar = require('./searchHandlebar');
const myProfileHandlebar = require('./myProfileHandlebar');
const wishlistHandlebar = require('./wishlistHandlebar')

const handleBars = [
  homeRoutes,
  categoryHandlebar,
  productHandlebar,
  cartHandlebar,
  searchHandlebar,
  myProfileHandlebar,
  wishlistHandlebar,
];
router.use('/', handleBars);

router.use('/api', apiRoutes);


module.exports = router;

const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const categoryHandlebar = require('./categoryHandlebar');
const productHandlebar = require('./productHandlebar')

router.use('/', homeRoutes, categoryHandlebar, productHandlebar);
router.use('/api', apiRoutes);


module.exports = router;

const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const categoryHandlebar = require('./categoryHandlebar');

router.use('/', homeRoutes, categoryHandlebar);
router.use('/api', apiRoutes);
// router.use('/categories', categoryHandlebar);

module.exports = router;

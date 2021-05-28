const router = require('express').Router();

const moviesRouter = require('./routes/moviesRouter.js');
const seriesRouter = require('./routes/seriesRouter.js');
const orderRouter = require('./routes/orderRouter.js');
// const customerRouter = require('./routes/customerRouter.js');

router.use('/movies', moviesRouter);
router.use('/series', seriesRouter);
router.use('/order', orderRouter);
// router.use('/customer', customerRouter);

module.exports = router;

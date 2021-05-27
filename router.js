const router = require('express').Router();

const moviesRouter = require('./routes/moviesRouter.js');
const seriesRouter = require('./routes/seriesRouter.js');
const orderRouter = require('./routes/orderRouter.js');
// const costumerRouter = require('./routes/costumerRouter.js');

router.use('/movies', moviesRouter);
router.use('/series', seriesRouter);
router.use('/order', orderRouter);
// router.use('/costumer', costumerRouter);

module.exports = router;

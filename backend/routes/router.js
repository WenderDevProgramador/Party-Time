const router = require('express').Router();

const serviceRouter = require('./service');

router.use(serviceRouter);

const partyController = require('./parties');

router.use(partyController);



module.exports = router;


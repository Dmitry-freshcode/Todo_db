const express = require('express');
const userRouter = require('./user');
const findAllRouter = require('./findAll');
const findByPkRouter = require('./findByPk');
const errorheandler = require('./../middlewares/errorHeandler');
const router = express.Router();

router.use('/findAll',findAllRouter);
router.use(errorheandler);

router.use('/find',findByPkRouter);
router.use(errorheandler);

router.use('/user',userRouter);
router.use(errorheandler);
module.exports = router;
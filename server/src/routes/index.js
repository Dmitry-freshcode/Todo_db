const express = require('express');
const userRouter = require('./user');
const router = express.Router();
router.use('/user',userRouter);
const errorheandler = require('./../middlewares/errorHeandler');
router.use('/user',userRouter);
router.use(errorheandler);
module.exports = router;
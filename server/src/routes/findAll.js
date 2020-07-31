const express = require('express');
const findAll  = require('./../controllers/findAll');
const findAllRouter = express.Router();
findAllRouter.post('/',findAll);
module.exports = findAllRouter;
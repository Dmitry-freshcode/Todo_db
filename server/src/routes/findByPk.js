const express = require('express');
const findByPk  = require('./../controllers/findId');
const findByRouter = express.Router();
findByRouter.post('/',findByPk);
module.exports = findByRouter;
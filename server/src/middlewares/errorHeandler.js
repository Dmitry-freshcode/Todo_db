var errorhandler = function (err,req,res,next) {
    res.status(500).send('internal server error');
};
module.exports = errorhandler;
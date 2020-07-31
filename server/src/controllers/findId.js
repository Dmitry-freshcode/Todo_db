const { User } = require('./../db/models');
const controllersByPk =  async function findByPk(req,res,next) {
    try{

        const userById = await User.findByPk(req.body.id);
        if (userById) {
            return res.status(201).send(userById);
        }
        return res.status(201).send(`user id=${req.body.id} not found`);

    }catch (e) {
        next(e);
    }
};

module.exports = controllersByPk;
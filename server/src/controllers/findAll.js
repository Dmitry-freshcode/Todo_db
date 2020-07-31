const { User } = require('./../db/models');
const controllersAll =  async function test(req,res,next) {
    try{
        const allUsers = await User.findAll();
        return res.status(201).send(allUsers);

    }catch (e) {
        next(e);
    }

};

module.exports = controllersAll;
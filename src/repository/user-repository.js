const {User}=require('../models/index');

class UserRepository {

    async create(data){
        try {
            const create=await User.create(data);
            return create;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async destroy(userId) {
        try {
            await User.destroy({
                where: {
                    id:userId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async getById(userId) {
        try {
            const user=await User.findByPk(userId,{
                attributes: ['id','email']
            });
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports= UserRepository;
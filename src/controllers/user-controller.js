const UserService=require('../services/user-service');
const userService=new UserService();
const create=async (req,res)=> { 
    try {
        const response=await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            message: "Successfully created a user",
            data: response,
            success: true,
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong",
            data: {},
            success: false,
            error: error
        });
    }
}

module.exports= {
    create
}
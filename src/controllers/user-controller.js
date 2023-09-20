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

const signIn= async(req,res) => {
    try {
        const response= await userService.signIn(req.body.email,req.body.password);
        return res.status(200).json({
            message: "Successfully signed in",
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

const isAuthenticated = async(req,res)=>{
    try {
        const token=req.headers['x-access-token'];
        const response=await userService.isAuthenticated(token);
        return res.status(200).json({
            success: true,
            error: {},
            data: response,
            message: "user is authenticated and token is valid"
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

const isAdmin = async(req,res)=>{
    try {
        const response=await userService.isAdmin(req.body.id);
        return res.status(200).json({
            success: true,
            error: {},
            data: response,
            message: "successfully fetched whether user is admin or not"
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
    create,
    signIn,
    isAuthenticated,
    isAdmin
}
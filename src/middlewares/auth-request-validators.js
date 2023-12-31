const validateUserAuth=(req,res,next)=>{
    if(!req.body.email|| !req.body.password)
    {
        return res.status(400).json({
            success: false,
            data: {},
            message: 'something went wrong',
            error: 'Email or password missing in the request'
        });
    }
    next();
}

const validateisAdminRequest=(req,res,next)=>{
    if(!req.body.id)
    {
        return res.status(400).json({
            success: false,
            data: {},
            message: 'something went wrong',
            error: 'user id is missing in the request'
        });
    }
    next();
}

module.exports={
    validateUserAuth,
    validateisAdminRequest
}
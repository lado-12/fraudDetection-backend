const { check } = require("express-validator")
const { validationResult } = require("express-validator")

exports.validateForm = [
    check("name").notEmpty().withMessage("please enter name"),
    check("phoneNumber").isMobilePhone().withMessage("please enter valid phone"),
    check("email").isEmail().withMessage("please enter valid email"),
    check("intrest").notEmpty().withMessage("please enter intrest"),
    check("message").isLength({ max: 100,min:1 }).withMessage("please enter within 100 character message")
]
exports.isValidated = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.array().length > 0) {
       return res.status(400).json({ message: errors.array()[0] })

    }
    next()

}



const jwt=require("jsonwebtoken")
exports.verifyToken=(req,res,next)=>{
    try{
        const token = req.headers.authorization
        console.log(token);
        if(token){
            const data= jwt.verify(token,"MyAPPSECRET")
            const {id}=data;
            console.log(id);
            req.id=id;
            next();
        }
        else{
            return res.status(401).json({message:"Token is missing"})
        }
    }
    catch(err){
        return res.status(401).json({err})
    }
}
const jwt = require("jsonwebtoken")
const Users = require("../models/Users")
exports.register=async(req,res)=>{
    const { name, phone, email, password } = req.body
    const _user =new Users({
        
        name,email,phone,password
    })
    const eUser=await Users.findOne({email})
    if(!eUser){
        _user.save().then(newUser=>{
            return res.status(201).json({message:"account created succcessfully"})
        }).catch(error=>{
            return res.status(400).json({
                message:"error occured",
                error
            })
        })
    }
    else{
        return res.status(400).json({message:"User already exist"})
    }
}
exports.login = async (req, res) => {
    const { email, password } = req.body //D-structure
    const eUser = await Users.findOne({ email })
    if (eUser) {
        if (eUser.password === password) {
          const token = jwt.sign({ id: eUser._id }, "MyAPPSECRET", { expiresIn: "24h" })
            return res.status(200).json({ message: "successfully logged in",token})
        } else { return res.status(401).json({ message: "password incorrect" }) }
    }
    else {
        return res.status(404).json({ message: "user not found please sign up" })
    }

}   
exports.updateUser =async (req,res)=>{
    try {
        const newData = req.body;
        const updatedUser = await Users.findByIdAndUpdate(req.id,newData)
        return res.status(200).json({message:"id updated"})
    } catch (e) {
        return res.status(404).json({message:"you are not the user"})
    }
}
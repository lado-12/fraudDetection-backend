const Form = require("../models/Form")
exports.addForm = async(req, res,next) => {
try {
    const _form = new Form(req.body)
    await _form.save()//invocation of a function
    req.subject = "user form submission"
    req.text = "you have successfully signed up"
    next()
   
} catch (error) {
    res.status(400).json({message:"error occured"})
    
}
}
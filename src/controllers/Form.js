const Form = require("../models/Form")
exports.addForm = async(req, res) => {
try {
    const _form = new Form(req.body)
    await _form.save()//invocation of a function
    res.status(201).json({message:"your form is submitted"})
} catch (error) {
    res.status(400).json({message:"error occured"})
    
}
}


const Fraud = require("../models/fraud")
exports.addFraud = async(req, res) => 
    {
        const { name, phoneNumber, email,transactionAmount,fraudsterMobile,userBehaviour } = req.body
        const _fraud = new Fraud(req.body)
        const eFraud=await Fraud.findOne({fraudsterMobile,name,phoneNumber,email})
      
        
        if(!eFraud){
            _fraud.save().then(newFraud=>{
                return res.status(201).json({message:"form submitted successfully"})
            }).catch(error=>{
                return res.status(400).json({
                    message:"error occured",
                    error
                })
            })
        }
        else{
            return res.status(400).json({message:"its a fraud"})
        }

    }

    
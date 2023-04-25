import Pin from "../models/Pin.js"

export const pinControl = async (req,res)=>{
    const newPin = new Pin(req.body)
 
    try{
      const SavePin = await newPin.save();
      res.status(200).json(SavePin)
    }
    catch(err){
       res.status(500).json(err);
    }
 }

 export const getPin = async (req,res)=>{
    try{
        const pins = await Pin.find();
        res.status(200).json(pins);
    }
    catch(err){
       res.status(500).json(err)
    }
 }
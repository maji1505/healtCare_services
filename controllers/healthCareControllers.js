const Services = require("../models/healthCare");
const mongoose=require('mongoose')


 const getAllServices=async(req,res)=>{
    try{
        const data= await Services.find({});
        console.log(data);
        res.status(201).json({message:"success",data});
    }
    catch(err){
        console.log(err.message);
        res.status(400).json({message:"failure",error:err.message});
    }
}

const addServices= async(req,res)=>{
    const data= req.body;
    try{
        const services=new Services(data)
        await services.save();
            console.log(services);
        return res.status(201).json({message:"success",data}); 
    }
    catch(error){
        console.log(error.message);
        return res.status(400).json({message:"failure",error:error.message})
    }
}

const updateServices=async(req,res)=>{
    const {id}=req.params;
    const data=req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"invalid service Id"});
       }
       
    try{
        const updateData= await Services.findByIdAndUpdate(id,data,{new:true});
        if(!updateData){
            return res.status(404).json({success:false,message:"services not exist"});
        }
        console.log(updateData);
        res.status(201).json({message:"success",data:updateData});
    }
    catch(err){
        console.log(err.message);
        res.status(201).send({message:"failure",error:err.message});
    }
}

const deleteServices=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"invalid service Id"});
       }

    try{
        const data=await Services.findByIdAndDelete(id);
        if(!data){
            return res.status(404).json({success:false,message:"services not exist"});
        }
        console.log(data);
        res.status(201).send({message:"success",data:"service deleted"});

    }
    catch(err){
        console.log(err.message);
        res.status(201).send({message:"failure",error:err.message});
    }
}

module.exports={getAllServices,addServices,updateServices,deleteServices};
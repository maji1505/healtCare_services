

const mongoose=require('mongoose')

const servicesSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
},{timestamps:true});

const Services= new mongoose.model("Services",servicesSchema);
module.exports=Services;
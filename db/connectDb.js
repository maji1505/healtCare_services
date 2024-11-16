

const mongoose=require('mongoose')
const connectDb= async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("database connected");
    }
    catch(err){
        console.log(err.message);
    } 
}
module.exports=connectDb;
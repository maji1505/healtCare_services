
const express=require('express');
const mongoose=require('mongoose')
const dotenv=require('dotenv')

const connectDb = require('./db/connectDb');
const Services = require('./models/healthCare');
const healthServicesRoutes=require('./routes/healthCareeRoutes')

dotenv.config();

const app=express();
const port=process.env.port||3000;



app.use(express.json());
app.use(express.urlencoded({extended:true})); //for accessing form data
 
app.use('/url/services',healthServicesRoutes)

app.get('*',(req,res)=>{
    res.redirect("/url/services")
})


app.listen(port,()=>{
    connectDb();
    console.log('port started on',port);
})
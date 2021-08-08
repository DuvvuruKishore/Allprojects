
const express =require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const User=require('./models/User');
const error=require('./middleware/errorMiddlewareHandler');
const usersRoute = require('./routes/usersRoute');
const dbConnect=require('./config/dbConnect');
require('dotenv').config();
dbConnect();


const app=express();

app.use(express.json());

app.use('/api/users',usersRoute);


//error middleware

app.use(error.errorMiddlewareHandler);
 
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
console.log("server is running");
})
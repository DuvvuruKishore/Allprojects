const express=require('express');
const asyncHandler=require('express-async-handler');
const authMiddleWare = require('../middleware/authMiddleware');
const usersRoute=express.Router();
const User=require('../models/User');
const token = require('../utils/token');

usersRoute.post('/register',asyncHandler(async(req,res)=>{
    
        const {name,email,password}=req.body;
        const userExists=await User.findOne({email:email});
        if(userExists){
            throw new Error('User Exist');
        }
   const user= await User.create({name,email,password})
   res.json({
    _id:user._id,
    name:user.name,
    password:user.password,
    email:user.password,
    token:token(user._id)
})
    
}));

usersRoute.post('/login',asyncHandler(async(req,res)=>{
   const {email,password}=req.body;
   const user=await User.findOne({email});
   if(user&& (await user.isPasswordMatch(password))){
       res.status(200);

       res.json({
           _id:user._id,
           name:user.name,
           password:user.password,
           email:user.password,
           token:token(user._id)
       })
   }else{
      res.status(401);
      throw new Error('Invalid Credentials');
   }

}));

usersRoute.put('/update',(req,res)=>{
   
});

usersRoute.delete('/delete',(req,res)=>{
   
})

usersRoute.get('/fetch',authMiddleWare,(req,res)=>{
 console.log(req.headers);
 res.send('Fetch users');
})



module.exports=usersRoute;
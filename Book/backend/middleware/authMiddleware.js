const asyncHandler=require('express-async-handler');
const { decode } = require('jsonwebtoken');

const authMiddleWare=asyncHandler(async(req,res,next)=>{
    let token;
    if(
        req.headers.authorization&&req.headers.authorization.startsWith('king')
    ){
        try{
         token=req.headers.authorization.split('')[1];

         const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);

         const user=await User.findById(decoded.id);

         req.user=user;
         next();

        }catch(error){
         res.status(401);
         throw new Error('not Authorized');
        }
    }
})

module.exports=authMiddleWare;
const mongoose =require('mongoose');

const dbConnect=()=>{
    mongoose.connect(process.env.MONGO_URL,{
useUnifiedTopology:true,useNewUrlParser:true,useFindAndModify:false,useCreateIndex:true
}).then(()=>{
    console.log("mongodb connected")
}).catch(error=>console.log(error))

}

module.exports=dbConnect;
const express =require('express');
const mongodb =require('mongodb');
const cors =require('cors');
const bcrypt =require('bcrypt');
require('dotenv').config()

const app=express();
app.use(cors())


const mongoClient=mongodb.MongoClient;
const port=process.env.port||2000;
const dbUrl=process.env.DB_URL||'mongodb://127.0.0.1:27017';

app.use(express.json());

app.get('/',async(req,res)=>{
    try{
    let client =await mongoClient.connect(dbUrl);
    let db=client.db("login");
    let data=await db.collection('user').find().toArray();
    res.status(200).json(data);
    }catch(error){
     console.log(error);
    }
});
app.post('/register',async(req,res)=>{
    try{
        let client=await mongoClient.connect(dbUrl);
        let db=client.db('login');
        let data=await db.collection("user").findOne({email:req.body.email});
        if(data){
            res.status(400).json({message:"user already exists"});
        }else{
            let salt=await bcrypt.genSalt(10);
            let hash=await bcrypt.hash(req.body.password,salt);
            req.body.password=hash;
            await db.collection("user").insertOne(req.body);
            res.status(200).json({message:"user registered"});
        }
    }catch(error){
        console.log(error);
    }
});
app.post('/login',async(req,res)=>{
  try{
    let client=await mongoClient.connect(dbUrl);
    let db=client.db('login');
    let data=await db.collection("user").findOne({email:req.body.email});
    if(data){
        let isValid=await bcrypt.compare(req.body.password,data.password);
        if(isValid){
            res.status(200).json({message:"login success"});
        }else{
            res.status(400).json({message:"login unsucessful"});
        }
    }else{
        res.status(404).json({message:"user is not registered"});
    }
        
  }catch(error){
      conssole.log(error);
  }
})

app.listen(port,()=>console.log("app runs with the port",port))

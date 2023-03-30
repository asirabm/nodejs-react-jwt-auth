const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const UserModel=require('./model/user')
app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    res.send({
        name:'asir',
        age:31
    })
})
app.post('/reg',async(req,res)=>{
    //console.log('heloooo')
    try{
        const user=req.body.user
    const usermodel=new UserModel({
        email:user.email,
        password:user.password
    })
    await usermodel.save()


    res.send('sucess')
    }
    catch(e){
        console.log(e.message)
    }
})

app.post('/login',async(req,res)=>{
   try{
   const user=req.body.user
   const u1=await UserModel.findOne({email:user.email})
   if(u1 == null){
    res.send('Cannot find user')
    }
    if(user.password===u1.password){
        res.send('sucess')
    }
    else{
        res.send('Wrong password')
    }

   }
   catch(e){
    console.log(e)
   }
})



const add="mongodb+srv://Asir:ETShOc4jsSMs0zI1@cluster0.h60upyz.mongodb.net/?retryWrites=true&w=majority"
//const add="" 
mongoose.connect(add).then(()=>console.log('connected db sucessfully')).catch(e=>console.log(e))




app.listen(4000,()=>console.log('connection established sucessfully'))
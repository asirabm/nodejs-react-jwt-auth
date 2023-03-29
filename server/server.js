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

mongoose.connect('mongodb://127.0.0.1:27017/jwt-login').then(()=>console.log('connected db sucessfully')).catch(e=>console.log(e))




app.listen(4000,()=>console.log('connection established sucessfully'))
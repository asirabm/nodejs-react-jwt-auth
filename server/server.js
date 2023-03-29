const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const cors=require('cors')
app.use(bodyparser.urlencoded({ extended: false }))

app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.json({
        name:'asir',
        age:31
    })
})
app.post('/reg',(req,res)=>{
    console.log('heloooo')
    const user=req.body.user
    console.log(user)
})






app.listen(4000,()=>console.log('connection established sucessfully'))
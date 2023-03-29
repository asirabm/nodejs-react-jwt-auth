const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
app.use(express.json())



app.get('/',(req,res)=>{
    res.send({
        name:'asir',
        age:31
    })
})
app.post('/reg',(req,res)=>{
    //console.log('heloooo')
    const user=req.body.user
    res.send('sucess')
})






app.listen(4000,()=>console.log('connection established sucessfully'))
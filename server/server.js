const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.json({
        name:'asir',
        age:31
    })
})


app.listen(4000,()=>console.log('connection established sucessfully'))
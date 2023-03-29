const express=require('express')
const app=express()
const cors = require('cors')

app.use(cors({
    origin:'*'
}))
app.get('/',(req,res)=>{
    res.send({
        name:'asir',
        age:31
    })
})


app.listen(4000,()=>console.log('connection established sucessfully'))
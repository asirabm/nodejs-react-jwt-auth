import React,{useState,useEffect} from 'react'
import axios from 'axios'

function ApiFetch() {
   const [result,setResult]=useState({})
   useEffect(()=>{
    axios.get('http://localhost:4000/').then(res=>setResult(res.data)).catch(e=>console.log(e))
   },[])
   console.log(result)
  return (
    <div>
        <h1>{result.name}</h1>
    </div>
  )
}

export default ApiFetch
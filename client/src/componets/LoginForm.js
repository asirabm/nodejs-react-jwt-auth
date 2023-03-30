import React, { useState } from "react";
import axios from 'axios'


export default function LoginFrom(){
  const [user,setUser]=useState({})
  const [message,setMessage]=useState()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user)
    axios.post('http://localhost:4000/login',{user:user})
    .then(res=>{
      console.log(res)
      setMessage(res.data)
    })
    .catch(err=>console.log(err))

  
  }
  const valueHandler=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setUser(prev=>({...prev,[name]:value}))
  }



    return(
      <>
      {message}
      <form method="post" onSubmit={handleSubmit}>
      <label>
      <input 
        type="email" 
        name="email" 
        onChange={valueHandler}
        value={user.email || ""}
      />
      </label>
      <label>Password
        <input 
          type="password" 
          name="password" 
          onChange={valueHandler}
          value={user.password || ""}
        />
        </label>
        <input type="submit" value="Login" />
    </form>
      </>
    )
}
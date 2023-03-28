import React from "react";
import { useState } from "react";

function RegisterForm(){
 const[user,setUser]=useState({})


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user)
  
  }

  const userValue=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setUser(prev=>({...prev,[name]:value}))
    
  }

    return(
      <>
      <form onSubmit={handleSubmit}>
      <label>
      <input 
        type="email" 
        name="email" 
        onChange={userValue}
        value={user.email||""}
      />
      </label>
      <label>Password
        <input 
          type="password" 
          name="password" 
          onChange={userValue}
          value={user.password||""}
        />
        </label>
        <input type="submit" value="Register" />
    </form>
      </>
    )
}
export default RegisterForm
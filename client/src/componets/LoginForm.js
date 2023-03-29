import React, { useState } from "react";

export default function LoginFrom(){
  const [user,setUser]=useState({})

  const handleSubmit = (event) => {
    event.preventDefault();

  
  }
  const valueHandler=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setUser(prev=>({...prev,[name]:value}))
  }



    return(
      <>
      <form method="post" onSubmit={handleSubmit}>
      <label>
      <input 
        type="email" 
        name="email" 
        onChange={valueHandler}
        value=""
      />
      </label>
      <label>Password
        <input 
          type="password" 
          name="password" 
          onChange={valueHandler}
          value=""
        />
        </label>
        <input type="submit" value="Login" />
    </form>
      </>
    )
}
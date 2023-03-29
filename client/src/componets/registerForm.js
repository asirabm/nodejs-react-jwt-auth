import React, { useEffect } from "react";
import { useState } from "react";
import axios  from 'axios'


function RegisterForm(){
 const[user,setUser]=useState({})


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/reg',{user:user})
      .then(res=>console.log(res)).
       catch(e=>console.log(e))
  
  }

  const userValue=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setUser(prev=>({...prev,[name]:value}))
    
  }
   /*useEffect(()=>{
      axios.post('http://localhost:4000/reg',user)
      .then(res=>console.log(res)).
       catch(e=>console.log(e))
   },[])

*/

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
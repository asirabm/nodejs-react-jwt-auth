import React from "react";

export default function LoginFrom(){

  const handleSubmit = (event) => {
    event.preventDefault();
  
  }
    return(
      <>
      <form onSubmit={handleSubmit}>
      <label>
      <input 
        type="email" 
        name="email" 
      />
      </label>
      <label>Password
        <input 
          type="password" 
          name="password" 
        />
        </label>
        <input type="submit" value="Login" />
    </form>
      </>
    )
}
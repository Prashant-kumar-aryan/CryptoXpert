import React, { useState } from 'react'

const Contact = () => {

  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  console.log(name,email);

  return (
    <div className='contact'>
      <form>
        <p>
          Name:
        </p>
        <input type="text" placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
         <p>
          Email:
        </p>
        <input type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
      </form>
    </div>
  )
}

export default Contact
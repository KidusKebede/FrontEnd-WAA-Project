import React, { useRef, useState, useNavigate } from 'react'

export default function RegistrationForm(props) {

   const navigate= useNavigate();
   const form= useRef();

   const formData= form.current;


   //Saving registration form or handling registration form 
   const registered= {
     name:formData['name'].value,
     email:formData['email'].value,
     telephone:formData['telephone'].value,
   }

  //Save registration form 
   axios.post("http://localhost:8080/ api/v1/registers" , registered)
   .then((res)=>{

    console.log("posted")
   }).catch((e)=>{
    console.log("error")
   })

//Registration form 
 return (
    <div>

        <form ref={form} >
            <h1>APPLICATION FORM</h1>
            <label>Name: </label>
            <input label={'name'} name={'name'} ></input><br/>
            <label>Email:</label>
            <input label={'email'} name={'email'}></input><br/>
            <label>Telephone:</label>
            <input label={'telephone'} name={'telephone'}></input>
        </form>

    </div>
  )
}

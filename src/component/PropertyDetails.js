import axios from 'axios';
import React, { useState, useEffect, useRef, } from 'react'
import { redirect, useNavigate, useParams } from "react-router";
import './Property'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

export default function PropertyDetails(props) {

  let navigate= useNavigate();

  const form=useRef()
    const [owner, setOwner] = useState({
      id: "",
      name:  "",
      email:  "",
      role: {
          id: "",
          role: ""
      },
      password: "",
      active: true

});

    const[propertyObj, setPropertyObj]=useState({
        id:"",
        propertyType:"",
        price:0,
        numberOfRooms:"",
        homeType:"",
        viewCount: "",
        location:"",
        users: []
    });



  
  let param = useParams();

  //Fetches a property by an ID
  let getPropertyById = () => {
    console.log(param.id);
    axios.get("http://localhost:8080/api/v1/properties/" + param.id)
      .then(res => {
        setPropertyObj(res.data)
        console.log(propertyObj);
      }).catch(() => alert("Data not Found"));
  }


    let getPropertyOwner= ()=>{
      console.log(param.id);
      axios.get("http://localhost:8080/api/v1/users/properties/" + param.id)
      .then(res=>{
          setOwner(res.data)
  }).catch(()=>alert("Owner Data not Found"));
  }

    //Deletes the property and navigates to the main page
    // const deleteProperty= ()=>{
    //     axios.delete("http://localhost:8080/api/v1/properties"+ param.id).then((res)=>{
    //         navigate("/");
    //     }).catch((e)=>{console.error()})
    // }


  // //Apply a property

  // const applyProperty= ()=>{
  //     navigate('/registrationForm' + param.id)
  // }

  // //Edit a property

  // const editProperty=()=>{
  //     navigate('/editProperty' + param.id);
  // }

  // const addFavorite= ()=>{
  //     navigate('/favoriteList' + param.id)
  // }


    useEffect(()=>{
        getPropertyById()
        getPropertyOwner()
    }, [param.id]);

    const applicationData = {
      date: "2028-01-01",
      activityType: "rent",
      status: "applied",
      ownerId: owner.id,
      pi:param.id,
      ui: 1
      
    };

    let createApplication= ()=>{
     
      axios.post("http://localhost:8080/api/v1/activities", applicationData)
      .then(res=>{
          
  }).catch(()=>alert("Owner Data not Found"));
  }

    const alertOnClick = () => {
      alert("Thank you we have received your application, we will contact you once we review your application ");
    };
  
    const sendEmail = (event) => {
      createApplication();
      alertOnClick();
      event.preventDefault();
  
      emailjs.sendForm('service_am29jrf',
        'template_2q3b47u',
        form.current,
        'oRa0T2idxrRZak40l')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    };

    const runEmailAndApplication = () => {
      sendEmail();
      createApplication();
    };

  return (
    <div id='details'>
      <div>
        <img id='img' src='https://media.istockphoto.com/id/1432540847/photo/3d-rendering-of-white-and-black-modern-tudor-house.jpg?s=612x612&w=0&k=20&c=3g89Cz9H6t6YnUTDTdBx2-oFLdoR53K6L78KgY4fG-s=' alt='details' width="1800px" height="700px"></img>
        <div id='propertyDetails'>
          
          <h1> PropertyType: {propertyObj.propertyType}</h1>
          <h1> Price: {propertyObj.price}</h1>
          <h1> numberOfRooms: {propertyObj.numberOfRooms}</h1>
          <h1>HomeType :{propertyObj.homeType}</h1>
          <h1>View Count :{propertyObj.viewCount}</h1>
          <h1> Location:{propertyObj.location} </h1>


          <div id="btn">
            <ul>
             
                
                <li>
                <form ref={form} onSubmit={createApplication}>
                <input type="submit" value="Apply" />
                
               </form>
                </li>
                <li>
                  
                <button >Favorite</button>
                </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  //   <form ref={form} onSubmit={sendEmail}>
  //   <input type="submit" value="Apply" />
  //  </form>
  )
}

import axios from 'axios';
import React, { useState, useEffect, } from 'react'
import { redirect, useNavigate, useParams } from "react-router";
import './Property'

export default function PropertyDetails(props) {
  //let navigate= useNavigate();


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
      date: "03,12,2023",
      activityType: "rent",
      status: "applied",
      ownerId: owner.id,
      users: 1,
      property:param.id
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
                <button >Delete</button>
                </li>
                <li>
                <button >Edit</button>
                </li>
                <li>
                <button >apply</button>
                </li>
                <li>
                <button >Favorite</button>
                </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

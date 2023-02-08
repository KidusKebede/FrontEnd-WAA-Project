import axios from 'axios';
import React, { useState , useParams, useEffect, useNavigate} from 'react'

export default function PropertyDetails(props) {
     const navigate= useNavigate();

    const[propertyObj, setPropertyObj]=useState({
        id:"",
        propertyType:"",
        price:"",
        numberOfRooms:"",
        homeType:"",
        location:""
    });

    const param= useParams();

    //Fetches a property by an ID
    const getPropertyById= ()=>{
        axios.get("http://localhost:8080/api/v1/properties" + param.id)
        .then((res)=>setPropertyObj(res.data))
        .catch(()=>alert("Data not Found"));
    }

    //Deletes the property and navigates to the main page
    const deleteProperty= ()=>{
        axios.delete("http://localhost:8080/api/v1/properties"+ param.id).then((res)=>{
            navigate("/");
        }).catch((e)=>{console.error()})
    }

    //Apply a property

    const applyProperty= ()=>{
        navigate('/registrationForm' + param.id)
    }

    //Edit a property

    const editProperty=()=>{
        navigate('/editProperty' + param.id);
    }

    const addFavorite= ()=>{
        navigate('/favoriteList' + param.id)
    }

    useEffect(()=>{
        getPropertyById()
    }, [param.id]);
  return (
    <div>

        <h1>ID:{propertyObj.id} </h1>
        <h1> PropertyType: {propertyObj.propertyType}</h1>
        <h1> Price: {propertyObj.price}</h1>
        <h1> numberOfRooms: {propertyObj.numberOfRooms}</h1>
        <h1>HomeType :{propertyObj.homeType}</h1>
        <h1> Location:{propertyObj.location} </h1>
        <button onClick={deleteProperty}>Delete</button>
        <button onClick={editProperty}>Edit</button>
        <button onClick={applyProperty}>apply</button>
        <button onClick={addFavorite}>Favorite</button>

    </div>
  )
}

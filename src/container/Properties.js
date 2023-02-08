import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-link';
import Property from '../component/Property';

export default function Properties(props) {


    const properties= [
        {id:1, propertyType:"rent", price:3000, numberOfRooms:4, homeType:"Apartment", location:"IA"},
        {id:2, propertyType:"sale", price:5000, numberOfRooms:8, homeType:"House", location:"FL"},
    ]
    // const[properties, setProperties]= useState([]);

    // const getAllProperties= ()=>{
    //     axios.get("http://localhost:8080/api/v1/properties").then((res)=>setProperties(res.data)).catch((e)=>{
    //         console.error();
    //     })
    // }
    

    const propertylists= properties.map(p=>
    <Link to={`${p.id}`} key={p.id}>
        <Property id= {p.id} propertyType= {p.propertyType} price= {p.price} />
    </Link>)

    // useEffect(()=>{
    //     getAllProperties();
    // }, [])
  return (
    <div>
     {propertylists}
     
    </div>
  )
}

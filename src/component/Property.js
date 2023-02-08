import React from 'react'
import { Link } from 'react-router-dom'
import './Property.css'

export default function Property(props) {
  return (
    <Link to={`${props.model.id}`}>
    <div id= "property"> 
      {/* id= "property"  className="Content"*/}
      <h1>ID: {props.model.id}</h1>
      <h1>PropertyType: {props.model.propertyType}</h1>
      <h1>Price: {props.model.price}</h1>
       </div>
       </Link>
    
  )
}

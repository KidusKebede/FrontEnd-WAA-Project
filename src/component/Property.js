import React from 'react'
import './Property.css'

export default function Property(props) {
  return (
    <div id= "property">
      <h1>ID: {props.id}</h1>
      <h1>PropertyType: {props.propertyType}</h1>
      <h1>Price: {props.price}</h1>
       </div>

  )
}

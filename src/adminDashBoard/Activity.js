import React from 'react'
import './Activity.css'

export default function Activity(props) {
  return (
    <div id="property">
        <h1>{props.id}</h1>
        <h1>{props.activityType}</h1>
        <h1>{props.date}</h1>
        <h1>{props.status}</h1>
    </div>
  )
}

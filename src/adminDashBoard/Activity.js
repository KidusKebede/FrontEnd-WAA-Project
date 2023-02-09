import React from 'react'
import './Activity.css'

export default function Activity(props) {
  return (
    <div id="activity">
      <ul>
        <li>
          <img src='https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg' alt='rented-houses' width="300px" height="300px"
          ></img>
          <div id='box'>
          <h1>{props.activityType}</h1>
          <h1>{props.date}</h1>
          <h1>{props.status}</h1>
          </div>
        </li>
      </ul>

    </div>
  )
}

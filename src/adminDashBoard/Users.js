import React from 'react'

export default function Users(props) {
  return (
    <div id='customer' >
      <ul>
        <li>
          <img src='https://media.istockphoto.com/id/1225782571/photo/happy-millennial-hispanic-teen-girl-checking-social-media-holding-smartphone-at-home-smiling.jpg?s=612x612&w=0&k=20&c=FvE-meOQyH2KrK0_M2FTi_OGbEGRvCqPAQRSke64_28=' width="500px" height="400px"></img>
          <div id="box-customer">
            <h1>{props.date}</h1>
            <h1>{props.name}</h1>
          </div>
        </li>
      </ul>
    </div>
  )
}

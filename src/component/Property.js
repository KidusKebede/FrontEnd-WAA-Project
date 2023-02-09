
import React from 'react'
import { Link } from 'react-router-dom'
import './Property.css'


export default function Property(props) {
  return (
    <div id="property">

      <ul>
        <li>
          <Link to={`${props.model.id}`}>
            <img id="img" src='https://img.freepik.com/premium-photo/external-view-contemporary-house-with-pool-dusk_190619-224.jpg' alt='house' width="400px" height="300px"
            ></img>
            <div id='box' >

              <h1 > for {props.model.propertyType}</h1>
              <h1 id="price">price {props.model.price} $</h1>
            </div>
          </Link>
        </li>
      </ul>
    </div>

  )

}

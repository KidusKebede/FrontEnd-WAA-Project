import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Customers.css'
import Users from './Users';

export default function RecentCustomer(props) {

  const [activities, setActivities] = useState([]);


//   const tokenTemp=window.sessionStorage.getItem('token')
//   const token = tokenTemp.substring(1,187);
// const config = {
//   headers: { Authorization: `Bearer ${token}`}
// };
  const config = {
    headers: { Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZW56ZWxAZ21haWwuY29tIiwiZXhwIjoxNjc2MTYyODU0LCJpYXQiOjE2NzYwODUwOTR9.MV6f1yPkgiZpsEk374U34i9pe3kHs3eZ5l_KMF98-J2zmRSdSbp2M2AThzYrmMK-A-HrYezVD5hVmjqjLGIByg"}` }
};

  const getAllUsers = () => {
    axios.get("http://localhost:8080/api/v1/activities/users",  {
      params: {
        users10: "users10"
      }
    },config)
      .then((res) => {
        setActivities(res.data);
        console.log("from buy",config)
      }).catch((e) => {
        console.log("from RC",config)
        console.error();
      });
  }

  const show = activities.map(a => {
    return <Users id={a.id} key={a.id} date={a.date} name={a.name}/>
  })



  useEffect(() => {
    getAllUsers()
  }, [])
  return (

    <div>
      {show}
    </div>
  )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Customers.css'
import Users from './Users';

export default function RecentCustomer(props) {

  const [activities, setActivities] = useState([]);





  const getAllUsers = () => {
    axios.get("http://localhost:8080/api/v1/activities/users", {
      params: {
        users10: "users10"
      }
    })
      .then((res) => {
        setActivities(res.data);
      })
  }

  const show = activities.map(a => {
    return <Users a={a} />
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

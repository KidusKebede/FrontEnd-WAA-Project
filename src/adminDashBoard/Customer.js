import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Customer(props) {

    const[users, setUsers]= useState([]);


    const getAllUsers= ()=>{
        axios.get("http:localhost:8080/api/v1/users")
        .then((res)=>{
            setUsers(res.data);
        }).catch((e)=>{
            console.error();
        })
    }

    //How to fetch the most recenet customers 

    const customers= users.filter(u=>u.roles.equal("Customer"));

  useEffect(()=>{
    getAllUsers()
  }, [])
  return (
    <div>
     {customers}
    </div>
  )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Users from './Users';


export default function Owner() {
  const [owners, setOwners] = useState([]);
  const tokenTemp=window.sessionStorage.getItem('token')
  const token = tokenTemp.substring(1, 187);
const config = {
  headers: { Authorization: `Bearer ${token}`}
};

  const getAllOwners = () => {
    axios.get("http://localhost:8080/api/v1/users/owners",config)
      .then((res) => {
        setOwners(res.data);
      }).catch((e) => {
        console.error();
      })
  }

  const ownersList = owners.map(c => <Users id={c.id} key={c.id} name={c.name} email={c.email} />)

  console.log(ownersList)

  useEffect(() => {
    getAllOwners();
  }, [])
  return (
    <div>
      {ownersList}
    </div>
  )
}

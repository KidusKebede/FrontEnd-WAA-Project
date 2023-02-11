import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Users from './Users';


export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const tokenTemp=window.sessionStorage.getItem('token')
  const token = tokenTemp.substring(1, 187);
const config = {
  headers: { Authorization: `Bearer ${token}`}
};
  const getAllCustomers = () => {
    axios.get("http://localhost:8080/api/v1/users/customers",config)
      .then((res) => {
        setCustomers(res.data);
      }).catch((e) => {
        console.error();
      })
  }

  const customerList = customers.map(c => <Users id={c.id} key={c.id} name={c.name} email={c.email} />)

  console.log(customerList)

  useEffect(() => {
    getAllCustomers();
  }, [])
  return (
    <div>
      {customerList}
    </div>
  )
}

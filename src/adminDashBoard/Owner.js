import axios from 'axios';
import React, { useState } from 'react'

export default function Owner(props) {

    const [users, setUsers] = useState([]);


    const getAllUsers = () => {
        axios.get("http:localhost:8080/api/v1/users")
            .then((res) => {
                setUsers(res.data);
            }).catch((e) => {
                console.error();
            })
    }


    //Fetching all customers
    const owners = users.filter(u => u.roles.equal("Owners"));

    useEffect(() => {
        getAllUsers()
    }, [])
    return (
        <div>
            {owners}
        </div>
    )
}

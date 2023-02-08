import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function RentedProperties(props) {
    const [properties, setProperties] = useState([]);


    const getProperties = () => {
        axios.get("http://localhost:8080/api/v1/properties")
            .then((res) => {
                setProperties(res.data);
            })
    }

    const rentedList = properties.filter(x => x.propertyType.equals("rent"));

    let firstTen = [];

    for (let i = 0; i < 10; i++) {
        firstTen[i] = rentList[i];
    }

    useEffect(() => {
        getProperties();
    }, [])
    return (
        <div>
            {firstTen}
        </div>
    )
}

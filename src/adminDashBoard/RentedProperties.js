import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Activity from './Activity';

export default function RentedProperties(props) {
    const [activities, setActivities] = useState([]);

    const tokenTemp=window.sessionStorage.getItem('token')
    const token = tokenTemp.substring(1, 187);
  const config = {
    headers: { Authorization: `Bearer ${token}`}
  };
    const getProperties = () => {
        axios.get("http://localhost:8080/api/v1/activities", {
            params: {
                last10: "last10"
            }
        },config).then((res) => {
            setActivities(res.data);
        },)

    }
    const list = activities.map(a => <Activity id={a.id} key={a.id} activityType={a.activityType} date={a.date} status={a.status} />)
    useEffect(() => {
        getProperties();
    }, [])
    return (
        <div>
            {list}
        </div>
    )
}

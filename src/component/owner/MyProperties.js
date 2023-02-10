import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-link";
import Property from "../Property";

const MyProperties = () => {
  const [properties, setProperties] = useState([]);

  const getAllProperties = () => {
    axios
      .get("http://localhost:8080/api/v1/users/4")
      .then((res) => setProperties(res.data.properties))
      .catch((e) => {
        console.error();
      });
  };

  const propertylists = properties.map((p) => <Property model={p} />);

  useEffect(() => {
    getAllProperties();
  }, []);
  return <div className="myProperties">{propertylists}</div>;
};

export default MyProperties;

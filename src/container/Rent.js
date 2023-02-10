import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import Property from "../component/Property";

const Buy = () => {
  const [homeType, setHomeType] = useState();
  const [location, setLocation] = useState();
  const [price, setPrice] = useState();
  const [propertyType, setPropertyType] = useState();
  const [rooms, setRooms] = useState();

  const [propertyList, setPropertyList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/properties/rent")
      .then((res) => setPropertyList(res.data))
      .catch((e) => {
        console.error();
      });
  }, []);

  let searchProperty = () => {
    axios
      .get("http://localhost:8080/api/v1/properties", {
        params: {
          location: location,
          homeType: homeType,
          price: price,
          propertyType: "rent",
          rooms: rooms,
        },
      })
      .then((response) => {
        setPropertyList(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const propertyElement = propertyList.map((p) => <Property model={p} />);
  return (
    <div id="filterForm">
      <div id="filtered">
      <ul>
        <li>
        <div>
        {" "}
          <label>Home Type: </label>
          <select
            onChange={(e) => {
              setHomeType(e.target.value);
            }}
          >
            {/* //<option value={null}>N/A</option> */}
            <option value={"Apartment"}>Apartment</option>
            <option value={"home"}>Home</option>
          </select>
        </div>
        </li>

        <li>
        <div>
          {" "}
          <label>Rooms: </label>
          <input
            type="number"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
          />
        </div>

        </li>

        <li>
        <div>
          <label> Location: </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        </li>
        <li>
        <div>
          {" "}
          <label>Price: </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        </li>

        <button id="button"onClick={searchProperty}>Apply Filter</button>

        <div>{propertyElement}</div>
        </ul>
       </div>
    </div>
  );
};

export default Buy;

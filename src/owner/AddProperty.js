import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


const AddProperty = () => {
  const navigate = useNavigate();
  const form = useRef();

  function Form() {
    const [homeType, setHomeType] = useState("");
    const [location, setLocation] = useState("");
    const [numRooms, setNumRooms] = useState("");
    const [price, setPrice] = useState("");
    const [propertyType, setPropertyType] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Form submitted with values: ", {
        homeType,
        location,
        numRooms,
        price,
        propertyType,
      });
      const postData = {
        id: 3,
        propertyType: propertyType,
        price: price,
        numberOfRooms: numRooms,
        homeType: homeType,
        viewCount: 0,
        location: location,
        users: [],
      };

     

      axios
        .post("http://localhost:8085/api/v1/properties", postData)
        .then((response) => {
          navigate("/");
        })
        .catch((error) => {
          alert(error);
        });
    };

    return (
      
      <form id="form" ref={form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="homeType">Home Type:</label>
          <select
            id="homeType"
            value={homeType}
            onChange={(event) => setHomeType(event.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="Apartment">Apartment</option>
            <option value="Home">Home</option>
          </select>
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numRooms">Number of Rooms:</label>
          <select
            id="numRooms"
            value={numRooms}
            onChange={(event) => setNumRooms(event.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="propertyType">Property Type:</label>
          <select
            id="propertyType"
            value={propertyType}
            onChange={(event) => setPropertyType(event.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="Rent">Rent</option>
            <option value="Sale">Sale</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
  return Form();
};
export default AddProperty;

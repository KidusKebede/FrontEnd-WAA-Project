import React, { useState } from "react";

const SearchForm = () => {
  const [formData, setFormData] = useState({
    price: 800.0,
    location: "Fairfield",
    rooms: 3,
    propertyType: "rent",
    homeType: "Apartment",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  //   const handleSubmit = event => {
  //     event.preventDefault();
  //     // make the Axios GET request here and pass in the form data as query parameters
  //   };

  return (
    <form>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="rooms">Rooms:</label>
        <input
          type="text"
          id="rooms"
          name="rooms"
          value={formData.rooms || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="propertyType">Property Type:</label>
        <input
          type="text"
          id="propertyType"
          name="propertyType"
          value={formData.propertyType || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="homeType">Home Type:</label>
        <input
          type="text"
          id="homeType"
          name="homeType"
          value={formData.homeType || ""}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

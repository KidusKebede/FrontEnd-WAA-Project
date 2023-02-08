import React, { useRef, useNavigate } from 'react'

export default function AddProperty(props) {

    const form = useRef();
    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = form.current;
        let propertyData = {
            propertyType: formData['propertyType'].value,
            price: formData['price'].value,
            NumberOfRooms: formData['numberOfRooms'].value,
            homeType: formData['homeType'].value,
            Location: formData['location'].value,
        }

        axios.post('http:loacalhost:8080/api/v1/properties', propertyData)
            .then(res => { navigate('/') })
            .catch((e) => console.error());
    }

    const CancelProperty = () => {
        navigate('/');
    }


    return (
        <div>
            <form ref={from}>
                <h1>ADD PROPERTY</h1>

                <label>PropertyType: </label>
                <input type="text" label={'properyType'} name={'propertyType'}>
                </input>
                <label>Price: </label>
                <input type="text" label={'price'} name={'price'}>
                </input>
                <label>Number Of Rooms: </label>
                <input type="text" label={'numberOfRooms'} name={'numberfRooms'}>
                </input>
                <label>HomeType: </label>
                <input type="text" label={'homeType'} name={'homeType'}>
                </input>
                <label>Location:</label>
                <input type="text" label={'location'} name={'location'}>
                </input>

                <button onClick={handleSubmit}>Add Property</button>
                <button onClick={CancelProperty}>Cancel</button>


            </form>

        </div>
    )
}

import React, { useState, useRef, useParams, useNavigate, useEffect } from 'react'

export default function EditProperty(props) {

    const param = useParams();
    const form = useRef();
    const navigate = useNavigate();

    const [updateProperty, setUpdateProperty] = useState({})
    
    //Get a property
    let getProperty = () => {
        axios.get("http://localhost:8080/api/v1/properties" + param.id)
            .then((res) => setUpdateProperty(res.data)).catch((e) => {
                console.error();
            })
    }


    //Handle the updated property
    const handleProperty=()=>{
        const formData= form.current;

        let propertyData = {
            propertyType: formData['propertyType'].value,
            price: formData['price'].value,
            NumberOfRooms: formData['numberOfRooms'].value,
            homeType: formData['homeType'].value,
            Location: formData['location'].value,
        }

        axios.post("http://localhost:8080/api/v1/properties" + param.id, propertyData).then((res)=>{
            navigate('/')
        }).catch("Data not update")
    }


    //Cancel the property
    const cancelProperty= ()=>{
        navigate('/')
    }

    useEffect(() => {
        getProperty();
    }, [param.id])


//Display the edit form application 
    return (

        <div>
            <form ref={form}>
                <h1>EDIT PROPERTY</h1>

                <label>PropertyType: </label>
                <input type="text"
                    label={'properyType'}
                    name={'propertyType'}
                    value={updateProperty.propertyType} onChange={(e)=>setUpdateProperty(updateProperty.propertyType= e.target.value)}>
                </input>
                <label>Price: </label>
                <input type="text"
                    label={'price'}
                    name={'price'}
                    value={updateProperty.price} onChange={(e)=>setUpdateProperty(updateProperty.price= e.target.value)}>
                </input>
                <label>Number Of Rooms: </label>
                <input type="text"
                    label={'numberfRooms'}
                    name={'numnerOfRooms'}
                    value={updateProperty.numberOfRooms} onChange={(e)=>setUpdateProperty(updateProperty.numberOfRooms= e.target.value)}>
                </input>
                <label>HomeType: </label>
                <input type="text"
                    label={'hometype'}
                    name={'hometype'}
                    value={updateProperty.hometype} onChange={(e)=>setUpdateProperty(updateProperty.hometype= e.target.value)}>
                </input>
                <label>Location: </label>
                <input type="text"
                    label={'location'}
                    name={'location'}
                    value={updateProperty.location} onChange={(e)=>setUpdateProperty(updateProperty.location= e.target.value)}>
                </input>

                <button onClick={handleProperty}>update</button>
                <button onClick={cancelProperty}>Cancel</button>


            </form>

        </div>
    )
}

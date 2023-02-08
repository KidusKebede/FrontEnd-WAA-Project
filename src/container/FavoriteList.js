import axios from 'axios';
import React, { useState, useParams, useEffect } from 'react'
import Property from '../component/Property';
import PropertyDetails from '../component/PropertyDetails';

export default function FavoriteList(props) {

    const param = useParams();

    const [favoriteList, setFavoriteList] = useState([]);

    const [favouriteObj, setFavouriteObj] = useState({});


    //Get the favorited property
    const getFavouriteObject = () => {
        axios.get("http://localhost:8080/api/v1" + param.id)
            .then((res) => setFavouriteObj(res.data))
            .catch((e) => {
                console.error();
            })
    }

   //Save the favourited property
    const saveFavorite = () => { }
    axios.post("http://localhost:8080/api/v1/favorites", favouriteObj)
    .then((res) => {
        console.log("saved")
    }).catch((e) => {
        alert("Not saved")
    })



    //Get all favoritedProperties
    const getAllFavorites = () => {
        axios.get("http://localhost:8080/api/v1/favorites")
        .then((res) => setFavoriteList(res.data))
        .catch((e) => {
            console.error();
        })
    }

    //Display all properties
    const displayList = favoriteList.map(f => <Property id={f.id} key={f.id} propertyType={f.propertyType} price={f.price} />)

    //Note This(NB)#####################################
    useEffect(() => {
        getFavouriteObject();
        getAllFavorites();
    }, [param.id])

    return (
        <div>
            {displayList}
        </div>
    )
}

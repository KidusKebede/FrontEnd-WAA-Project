import axios from 'axios';
import React, { useState, useParams, useEffect } from 'react'
import Property from '../component/Property';
import PropertyDetails from '../component/PropertyDetails';

export default function FavoriteList(props) {

   // const param = useParams();

    const [favoriteList, setFavoriteList] = useState([]);

    const tokenTemp=window.sessionStorage.getItem('token')
    const token = tokenTemp.substring(1, 187);
  const config = {
    headers: { Authorization: `Bearer ${token}`}
  };

   // const [favouriteObj, setFavouriteObj] = useState({});


    //Get the favorited property
    // const getFavouriteObject = () => {
    //     axios.get("http://localhost:8080/api/v1" + param.id)
    //         .then((res) => setFavouriteObj(res.data))
    //         .catch((e) => {
    //             console.error();
    //         })
    // }

//    //Save the favourited property
//     const saveFavorite = () => { }
//     axios.post("http://localhost:8080/api/v1/favorites", favouriteObj)
//     .then((res) => {
//         console.log("saved")
//     }).catch((e) => {
//         alert("Not saved")
//     })



    //Get all favoritedProperties
    // const getAllFavorites = () => {
    //     axios.get("http://localhost:8080/api/v1/users/1/favorite") /api/v1/users/1/favorite
    //     .then((res) => setFavoriteList(res.data))
    //     .catch((e) => {
    //         console.error();
    //     })
    // }
    const getAllFavorites= ()=>{
            axios.get("http://localhost:8080/api/v1/users/1/favorite", config).then((res)=>setFavoriteList(res.data)).catch((e)=>{
            console.error();
        })
    }
    //Display all properties
    // const displayList = favoriteList.map(f => <Property id={f.id} key={f.id} propertyType={f.propertyType} price={f.price} />)

    const displayList= favoriteList.map(p=>
    
        <Property model={p} />
    )

    //Note This(NB)#####################################
    useEffect(() => {
       // getFavouriteObject();
        getAllFavorites();
    }, [])

    return (
        <div>
            {displayList}
        </div>
    )
}

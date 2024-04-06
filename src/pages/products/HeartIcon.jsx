import React, { useEffect } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import{
    addFavouriteToLocalStorage,
    getFavouritesFromLocalStorage,
    removeFavouriteFromLocalStorage
}from '../../Utils/localStotage'
import{
    addToFavorites,
    removeFromFavorites,
    setFavorites
}from '../../redux/features/favorites/favoriteSlice'

const HeartIcon = ({product}) => {
    const dispatch=useDispatch()
    const favourites=useSelector((state)=>state.favourites)||[]
    const isFavourites=favourites.some((p)=>p._id ===product._id)

useEffect(()=>{
    const favouritesFromLocalStorage=getFavouritesFromLocalStorage()
    dispatch(setFavorites(favouritesFromLocalStorage))
},[])
 
const toggleFavourites=()=>{
    if(isFavourites){
        dispatch(removeFromFavorites(product))
        //remove the product from the localstorage aswell
        removeFavouriteFromLocalStorage(product._id)
    }else{
        dispatch(addToFavorites(product))
        //add product to localstorage as well
        addFavouriteToLocalStorage(product)
    }
}


return (
    <div
       className='  cursor-pointer'
       onClick={toggleFavourites}
    >
    {isFavourites ?(
        <FaHeart className=' text-pink-500'/>
    ):(
        <FaRegHeart className=' text-black'/>
    )}
    </div>
  )
}

export default HeartIcon


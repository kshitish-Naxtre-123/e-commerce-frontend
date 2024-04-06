import React from 'react'
import { useSelector } from 'react-redux'
import{selectFavoriteProduct} from '../../redux/features/favorites/favoriteSlice.js'
import Product from './Product.jsx'

const Favourites = () => {
    const favourites=useSelector(selectFavoriteProduct)
    // console.log(favourites);
  return (
    <div className=' ml-[10rem]'>
        <h1 className=' text-lg font-bold ml-[3rem] mt-[3rem]'>
            Favourite Products
        </h1>
        <div className=' flex flex-wrap'>
            {favourites.map((product)=>(
                <Product key={product._id} product={product}/>
            ))}
        </div>
    </div>
  )
}

export default Favourites


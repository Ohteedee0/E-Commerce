import React from 'react'
import Welcome from '../Components/Welcome'
import Popular from '../Components/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollection/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
        <Welcome/>
        <Popular/>
        <Offers/>
        <NewCollection/>
       <NewsLetter/>
    </div>
  )
}


export default Shop
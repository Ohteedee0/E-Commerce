import React,{useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import {data_allproducts} from '../Context/Allproducts'
import Items from '../Components/Items';



const Men = (props) =>{
  const {data_allproducts} = useContext(ShopContext);
  return (
    <div>
       
      <img className='m-[auto]' src="./imgs/men banner.jpeg" alt="" />
      <div>
        <p>
            <span>Showing 1-12 </span> out of 36 products
        </p>
        <div>
           sort by <img src="" alt="" /> 
        </div>
      </div>
      <div>

     {data_allproducts.map((items,i)=>{
        if(items.category ==='Men'){
            return <Items key={i} image={items.image} name={items.name} new_price={items.new_price} old_price={items.old_price} />
            
        }
        else{ return null ;}
     })}
      </div>
    </div>
    
  )
}



export default Men

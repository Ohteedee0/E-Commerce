import React,{useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import Items from '../Components/Items';



const ShopCategory = (props) =>{
  const {all_products} = useContext(ShopContext);
  return (
    <div>
       
      <img className='m-[auto]' src="./imgs/woman banner.jpeg" alt="" />
      <div>
        <p>
            <span>Showing 1-12 </span> out of 36 products
        </p>
        <div>
           sort by <img src="" alt="" /> 
        </div>
      </div>
      <div>

     {all_products.map((items,i)=>{
        if(props.category ===Items.category){
            return <items key={i} image={items.image} name={items.name} new_price={items.new_price} old_price={items.old_price} />
            
        }
        else {return null;}
     })}
      </div>
    </div>
    
  )
}



export default ShopCategory

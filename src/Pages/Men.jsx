import React,{useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import {data_allproducts} from '../Context/Allproducts'
import Items from '../Components/Items';



const Men = (props) =>{
  const {data_allproducts} = useContext(ShopContext);
  return (
    <div>
       
      <img className='m-[auto] mt-[30px] mb-[30px] lg:w-[82%]' src="./imgs/men banner.jpeg" alt="" />
      <div className='flex mt-0 mb-0  lg:mr-[170px] lg:ml-[170px] lg:justify-between items-center'>
        <p>
            <span>Showing 1-12 </span> out of 36 products
        </p>
        <div className='pt-[10px] pb-[10px] pr-[20px] pl-[20px] rounded-[40px] border-[#888] bottom[solid]'>
           sort by <img src="" alt="" /> 
        </div>
      </div>
      <div  className='sm:m-auto sm:items-center lmr-[10px] lg:grid lg:grid-cols-[1fr,1fr,1fr,1fr] mt-[20px] lg:mr-[170px] lg:ml-[170px] mb-[20px]  lg:row-gap-[30px]'>

     {data_allproducts.map((items,i)=>{
        if(items.category ==='Men'){
            return <Items key={i} id={items.id} image={items.image} name={items.name} new_price={items.new_price} old_price={items.old_price} />
            
        }
        else{ return null ;}
     })}
      </div>
       <div className='flex justify-center items-center mt-[150px] mb-[150px] mr-[auto] ml-[auto] w-[223px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] font-[500] text-[18px]  cursor-pointer'>
        Explore More
      </div>
    </div>
    
  )
}



export default Men

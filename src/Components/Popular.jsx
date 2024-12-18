import React from 'react'
import {data_product}  from './Assets/Productdetails'
import Items from './Items'

export default function Popular() {
  return (
    <div className='flex flex-col items-center gap-[10px]  lg:h-[90vh]'>
        <h1 className='text-[#171717] lg:text-[50px] lg:font-[600]'> POPULAR IN WOMEN</h1>
        <hr className='w-[200px] h-[6px] rounded bg-[#252525]'/>
        <div className='mt-[50px] lg:flex gap-[30px]'>
            {data_product.map((items,i)=>{
                return <Items key={i} id= {items.id} name={items.name} image ={items.image} new_price ={items.new_price} old_price ={items.old_price} />
            })}
        </div>

    </div>
  )
}

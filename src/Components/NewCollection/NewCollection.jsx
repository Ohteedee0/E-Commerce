import React from 'react'
import { data_collection } from './Collection'
import Items from '../Items'

const NewCollections =() =>{
return (
  <div className='flex flex-col items-center gap-[10px]  mb-[100px]'>
    <h1 className='text-[#171717] lg:text-[50px] lg:font-[600]'>NEW COLLECTION</h1>
    <hr className='w-[200px] h-[6px] rounded bg-[#252525]' />
    <div className=' lg:grid lg:grid-cols-[1fr,1fr,1fr,1fr] mt-[50px]  gap-[30px]'>
      {data_collection.map((items,i)=>{
                return <Items key={i} id= {items.id} name={items.name} image ={items.image} new_price ={items.new_price} old_price ={items.old_price} />
            })}

    </div>
    

  </div>


)}

export default  NewCollections
 


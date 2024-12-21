import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function () { 

    const [menu ,setMenu] =useState ('shop')
   const handlemenu =() => setMenu (!menu)
  return (
    <div className='flex justify-around p-[16px] border '>

        <div className='lg:flex justify-center items-center gap-[10px] '>
            <i className="fa-brands fa-shopify text-[50px] text-[#ff4141]"></i>
            <p className='text-[#171717] text-[38px] font-[600]'>SHOPPER</p>
        </div>
        <ul className='lg:flex items-center cursor-[pointer]  sm:gap-[10px]  lg:gap-[50px] font-[20px] '>
            <li onClick={(handlemenu)=>{setMenu('shop')}} className='lg:flex flex-col cursor-[pointer] items-center hr  justify-center gap-[3px] '><Link to='/'>Shop</Link> {menu==="shop"? < hr className='border-[none] w-[80%] h-[3px] rounded-[10px] bg-[#FF4141] '/>: <></>}   </li>
            <li onClick={(handlemenu)=>{setMenu("mens")} } className='lg:flex flex-col cursor-[pointer] items-center justify-center gap-[3px]'><Link to='/men'>Men</Link>{menu==='mens'? < hr className='border-[none] w-[80%] h-[3px] rounded-[10px] bg-[#FF4141] '/>: <></>}</li>
            <li onClick={(handlemenu)=>{setMenu("womens")}} className='lg:flex flex-col items-center justify-center gap-[3px]'><Link to="/woman">Women</Link> {menu==="womens"?< hr className='border-[none] w-[80%] h-[3px] rounded-[10px] bg-[#FF4141] '/>: <></>}</li>
            <li onClick={(handlemenu)=>{setMenu("kids")}} className='lg:flex flex-col cursor-[pointer] items-center justify-center gap-[3px]  '><Link to='/kids'>Kids</Link>{menu==="kids" ? < hr className='border-[none] w-[80%] h-[3px] rounded-[10px] bg-[#FF4141] '/>: <></>}</li>
        </ul>
        <div className='lg:flex  lg:items-center lg:gap-[45px]  '>
           <Link to='/login'> <button className='lg:w-[157px] lg:h-[58px] border  bg-[#7a7a7a] lg:rounded-xl text-[#515151] font-[20px] active:bg-[#f3f3f3] l'>Login</button></Link>
               <Link to='/cart'><i className="fa-solid fa-cart-shopping text-[50px] text-[blue] "></i></Link>
               <div className='lg:w-[22px] lg:h-[22px] flex justify-center sm:w-[5px] sm:h-[5px] items-center bg-[red] text-[white] lg:mt-[-35px]  lg:ml-[-55px] border rounded-full sm:mt-[-50px] sm:ml-[px]' >0</div>
        </div>


    </div>
  )
}

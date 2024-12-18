import React from 'react'

export default function () {
  return (
    <div className='flex flex-col justify-center items-center gap-[50px]'>
        <div className='flex items-center gap-[20px]'>
           <i className="fa-brands fa-shopify text-[50px] text-[#ff4141]"></i>
            <p className='text-[#383838] text-[46px] font-[700]'>SHOPPER</p>
        </div>
        <ul  className='flex list-none gap-[50px] text-[20px] '>
            <li className='cursor-pointer'>Company</li>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>Offices</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
        <div className='flex gap-[20px] '>
            <div className='p-[10px] pb-[6px] bg-[#fbfbfb] border border-[solid] border-[#ebebeb]'>
               <i className="w-[50px] text-[50px]  text-[#c23339]  fa-brands fa-square-instagram"></i>
            </div>

            <div className='p-[10px] pb-[6px] bg-[#fbfbfb] border border-[solid] border-[#ebebeb]'>
               <i className="w-[50px] text-[50px] text-[red] fa-brands fa-square-pinterest"></i>
            </div>

            <div className='p-[10px] pb-[6px] bg-[#fbfbfb] border border-[solid] border-[#ebebeb]'> 
                <i class="fa-brands fa-square-whatsapp text-[#63E6BE] text-[50px]"></i>
            </div>

        </div>
        <div className='flex flex-col items-center gap-[30px] w-[100%] mb-[30px] text-[#1a1a1a] text-[20px] '>
            <hr className='w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]' />
            <p> Copyright © 2024 - All rights Reserved.</p>
        </div>
    
        
    </div>
  )
}

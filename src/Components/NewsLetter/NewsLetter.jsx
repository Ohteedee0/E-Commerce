import React from 'react'

export default function NewsLetter() {
  return (
    <div className=' sm:w-[100%] lg:w-[65%] h-[40vh] flex flex-col items-center justify-center m-[auto] pt-[0] pb-0 lg:pl-[140px] lg:pr-[140px] lg:mb-[150px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] opacity-[] gap-[30px] '>
        <h1 className='text-[#454545] lg:text-[55px] font-[600] '>Get Exclusive Offers on Your Email</h1>
        <p className='text-[#454545] text-[20px] '>Subscribe to our newsletter and stay Updated</p>
        <div className='flex items-center justify-between bg-white lg:w-[730px] h-[70px] rounded-[80px] border border-[solid] border-[#e3e3e3] '>
            <input className='lg:w-[500px] ml-[30px] border-none outline-none text-[#616161] font-[poppins] text-[16px]' type="email" placeholder='Your Email id' />
            <button className='lg:w-[210px]  h-[70px] rounded-[80px] bg-[black] text-[white] ltext-[16px] cursor-pointer '>Subscribe</button>
        </div>
    </div>
  )
}

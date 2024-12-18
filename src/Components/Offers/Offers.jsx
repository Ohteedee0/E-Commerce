import React from 'react'

export default function Offers() {
  return (
    <div className='lg:w-[65%] sm:w-[50%] lg:h-[60vh] flex  lg:m-[auto] lg:pr-[140px] lg:pl-[140px] sm:mb-[50px] mt-[50px] lg:mb-[200px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] ] sm:pt-[100px] '>

      <div className='flex-1 flex flex-col justify-center '>
    <h1 className='text-[#171717] font-[600] sm:text-[50px]  lg:text-[80px] '>Exclusive</h1>
    <h1 className='text-[#171717] font-[600] lg:text-[80px]'>Offers For You</h1>
    <p className='text-[#171717] text-[22px] font-[600] '>ONLY ON BEST SELLERS PRODUCTS</p>
    <button className='w-[282px] h-[70px] rounded-[35px] bg-[#ff4141] border-none text-[white] text-[22px] font-[500] mt-[30px] cursor-pointer'>Check Now</button>

      </div>


      <div className='flex-1 flex justify-[flex-end] pt-[50px]'>
    <img src='./imgs/9902090.png' alt='' />

      </div>
      


    </div>
  )
}

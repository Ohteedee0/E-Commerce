import React from 'react'

export default function Loginsignup() {
  return (
    <div className='w-[100%] h-[80vh] bg-[#ffce3fe] pt-[100px] bg-[#fce3fe]'>
      <div className='w-[580px] h-[600px] bg-[white] m-[auto] pt-[40px] pb-[40px] pr-[60px] pl-[60px]'>
        <h1 className='mt-[20px] mb-[20px] mr-[0] ml-0'>Sign Up</h1>
        <div className='flex flex-col gap-[20px] mt-[30px] '>
          <input className='h-[72px] w-[100%] pl-[20px] border border-[solid] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]' type="text" placeholder='Your Name' />
          <input className='h-[72px]  w-[100%] pl-[20px] border border-[solid] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]' type="text" placeholder='Email Address' />
          <input className='h-[72px]  w-[100%] pl-[20px] border border-[solid] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]' type="text" placeholder='Password' /> 
        </div>
        <button className='w-[100%] h-[72px] text-[color] mt-[30px] border-none text-[24px] font-[500] cursor-pointer bg-[#ff4141]'>Continue</button> 
        <p className='mt-[20px] text-[#5c5c5c] text-[18px] font-[500]'>Already have an account?  <span className='text-[#ff4141] font-[500] '>Login</span></p>
        <div className='flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] font-[18px] font-[500]'>
          <input type="checkbox" />
          <p>By Continuing, I agree to the terms of use and policy</p>
        </div>

      </div>

    </div>
  )
}

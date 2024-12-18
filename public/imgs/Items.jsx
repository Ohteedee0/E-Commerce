import React from 'react'

export default function Items(props) {
  return (
    <div className='w-[350px] transform hover:scale-(1.05) transition duration-[0.6s] '>
        <img src={props.image} alt="" />
        <p className='mt-[6px] mb-[10px]'>{props.name}</p>
        <div className='flex gap-[20px]'>
            <div className='text-[#374151] text-[18px] font-[600]'>
                ${props.new_price}

            </div>
            <div className='text-[#8c8c8c] text-[18px] font-[500] line-through'>
               $ {props.old_price}

            </div>

        </div>

    </div>
  )
}



import React from 'react'
import star from "../assets/star.png"
export const Card = (props) => {
  return (
    <div className='ml-[20px]'>
        <img className='w-[300px] h-[220]' src={props.image} alt=''/>
        <div className='mt-[16px] max-w-[220px]'>
          <div className='flex w-[300px] justify-between'>
            <label className='font-[16px]'>{props.title}</label>
            <div className='flex'>
              <img className='h-[22px] w-[22px]' src={star} alt=''/> {props.rate}
            </div>
          </div>
          <label class='font-light text-[12px]'>{props.location}</label>
        </div>
    </div>
  )
}
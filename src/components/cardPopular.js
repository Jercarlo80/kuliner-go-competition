import React from 'react'
import star from '../assets/star.png'

export const CardPopular = (props) => {
  return (
    <div className='ml-[40px]'>
        <img src={props.image} alt=''/>
        <div className='mt-[16px] max-w-[220px]'>
          <div className='flex w-[300px]'>
            <label className='font-[16px]'>{props.title}</label>
            <div className='flex ml-[50px]'>
              <img className='h-[22px] w-[22px]' src={star} alt=''/> {props.rate}
            </div>
          </div>
          <label class='font-light text-[12px]'>{props.desc}</label>
        </div>
    </div>
  )
}
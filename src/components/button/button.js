import React from 'react'

export const Button = (props) => {
  return (
    <button className='button bg-[#0190FF] w-full text-white py-3 rounded-full mt-1 font-bold hover:bg-sky-700' type='submit'>
        {props.title}
    </button>
  )
}
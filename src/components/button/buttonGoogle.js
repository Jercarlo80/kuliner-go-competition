import React from 'react'
import googleicon from "../../assets/google.png";

export const ButtonGoogle = (props) => {
  return (
    <div>
        <button className='button bg-white border-solid border border-borderGrey rounded-full py-3 w-[380px] justify-center font-bold flex mt-6 hover:bg-slate-100' type='submit'>
           <img className='w-6 mr-2' src={googleicon} alt='' /> {props.title}
        </button>
    </div>
  )
}
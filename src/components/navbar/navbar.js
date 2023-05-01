import React,  {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";

import Logo from '../../assets/logo.png';

const Navbar = () => {
    return(
        <div className='navbar flex justify-between items-center fixed  z-10 bg-white h-[90px] w-full text-[#0190ff] '>
            <Link to='/'>
                <img src={Logo} alt='kuliner-go-icon' className="w-[230px] h-[52px] " />
            </Link>
        </div>
    )
}
export default Navbar;
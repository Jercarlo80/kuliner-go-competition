import React from "react";

import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return(
        <div>
            <div>
                <Link to='/'>
                    <img src={Logo}/>
                </Link>
            </div>
        </div>
    )
}
export default Navbar;
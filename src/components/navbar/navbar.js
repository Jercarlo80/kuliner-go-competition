import React,  {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import '../../style.css'
import Logo from '../../assets/logo.png';

const Navbar = () => {
    const [navbarColor, setNavbarColor] = useState("transparent");
    const [navbar, setNavbar] = useState(false);
    const [logo, setLogo] = useState(false);
    const handleNavbar = () => {
        setNavbar(!navbar);
        setLogo(!logo)
    }

    useEffect(() => {
        const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setNavbarColor("bg-white");
        } else {
            setNavbarColor("transparent");
        }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return(
        <nav className={`fixed top-0 left-0 right-0 z-50 ${navbarColor} h-[100px]`}>
            <div className='ml-[70px] mt-[29px]'>
                <Link to='/'>
                    <img src={Logo} alt='kuliner-go-icon' className="w-[230px] h-[52px] md:cursor-pointer" />
                </Link>
                <ul className="navlink hidden md:flex justify-center text-center absolute left-[520px] top-[20px]">
                    <li>
                        <Link to='/Home' className="py-7 px-[32px] inline-block ">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/Favorite' className="py-7 px-[32px] inline-block">
                            Favorite
                        </Link>
                    </li>
                    <li>
                        <Link to='/Terdekatku' className="py-7 px-[32px] inline-block">
                            Terdekatku
                        </Link>
                    </li>
                    <li>
                        <Link to='/Popular' className="py-7 px-[32px] inline-block">
                            Popular
                        </Link>
                    </li>
                    <div className="md:flex hidden mt-[12px] ml-[220px]">
                        <li>
                            <Link to='/Masuk' className="">
                                <button className="bg-white text-[#0190ff] font-bold py-2 px-4 rounded m-3">
                                    Masuk
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/Daftar' className="">
                                <button className="bg-[#0190ff] text-white font-bold py-2 px-4 rounded m-3">
                                    Daftar
                                </button>
                            </Link>
                        </li>

                    </div>
                </ul>
                <div className={navbar ? 'absolute left-0 top-0 w-full text-black bg-gray-100/90 px-4 py-10 flex flex-col':'absolute left-[-100%]'} onClick={handleNavbar}>
                    <ul>
                        <h5>Kuliner.Go</h5>
                        <li>
                            <Link className="border-b border-b-[#0190ff] text-black no-underline md:underline" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="border-b border-b-[#0190ff] text-black" to="/Favorite">Favorite</Link>
                        </li>
                        <li>
                            <Link className="border-b border-b-[#0190ff] text-black" to="/Terdekatku">Terdekatku</Link>
                        </li>
                        <li>
                            <Link className="border-b border-b-[#0190ff] text-black" to="/Popular">Popular</Link>
                        </li>
                        <div className='flex flex-col w-96'>
                            <Link to='/Masuk'>
                                <button className='font-bold my-6 py-3 px-4 border bg-[#0190ff] text-white rounded-[10px] cursor-pointer'>Masuk</button>
                            </Link>
                            <Link to='/Daftar'>
                                <button className='font-bold py-3 px-4 border bg-[#0190ff] text-white rounded-[10px] cursor-pointer '>Daftar</button>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
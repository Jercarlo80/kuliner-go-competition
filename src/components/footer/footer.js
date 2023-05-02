import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { HiChevronRight } from "react-icons/hi";
// import Search from '../../Pages/SearchBox/Search';
// import RestoData from "../Navbar/RestoData.json";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full h-[476px] bg-[#white] border border-primaryColor flex justify-center items-center flex-col pt-[10px] border-[#E6E6E6] ">
      <div className="">
        <img
          src={Logo}
          alt="kuliner.go-icon"
          className="w-[230px] h-[52px] relative top-[50px] right-[580px] cursor-pointer"
        />
        <div className="relative right-[580px] top-[200px] "></div>
        <div className="font-bold text-[24px]  ">
          Navigasi
          <div className="w-[100px] h-[160px] mt-[44px] ">
            <p className="font-normal text-[18px] mt-[20px]  ">Beranda</p>
            <p className="font-normal text-[18px] mt-[20px] ">Terdekatku</p>
            <p className="font-normal text-[18px] mt-[20px] ">Artikel</p>
            <p className="font-normal text-[18px] mt-[20px] ">Forum</p>
          </div>
        </div>
        <div className="font-bold text-[24px] relative left-[250px] bottom-[240px] ">
          Hubungi Kami
          <span>
            <Link to="/Aboutus">
              <button className="relative left-[20px] top-[4px] cursor-pointer">
                <HiChevronRight size={25} />
              </button>
            </Link>
          </span>
          <p className="w-[317px] h-[60px] font-light text-[18px] mt-9  ">
            Gedung Mewah, Jalan Belak-belok No 12, Bojongsoang, Bandung 12230
          </p>
          <p className="font-extrabold text-[18px] relative top-9 left-[26px] ">
            Phone : <span className="font-light ">0220102038</span>
          </p>
          <BsFillTelephoneFill
            size={20}
            className="absolute bottom-[-4px] right-[310px]"
          />
          <div className="relative left-[26px]">
            <p className="font-extrabold text-[18px] relative top-16  ">
              Email: <span className="font-light">hello@kulinergo.com</span>
            </p>
            <SiGmail
              size={20}
              className="absolute bottom-[-60px] right-[333px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

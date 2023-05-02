import React from "react";
import { Link } from 'react-router-dom';

import Circle from '../assets/vector.png';

import Mie from '../assets/mie.png';
import Kategori from "../components/kategori";
import Daerah from "../components/daerah";
import Ilustrator from '../assets/ilustrator.png';
import Bakso from '../assets/bakso.png';
import Count from "../components/count";
import Artikel from "../components/artikel";

const Home = () => {
    return(
        <div className="h-full">
            <div className="md:flex justify-end hidden">
                <img src={Circle} />
            </div>
            <div className="container">
                <div className='flex flex-wrap w-[512px] h-[369px] ml-[100px] absolute top-[223px]'>
                    <h1 className="text-[64px] text-[#0190ff] font-semibold">Explore your</h1>
                    <h1 className="text-[64px] text-[#0190ff] font-semibold">Favorite food</h1>
                    <p className="w-[470px] h-[90px] text-[20px] font-light py-[32px]">
                        Yuk temukan lokasi restoran andalan warga lokal
                        di lokasimu sekarang dan rasakan sensasi kuliner 
                        yang belum pernah kamu rasakan sebelumnya
                    </p>
                    <div className="py-[52px]">
                        <Link to='/'>
                            <button className='border bg-[#0190ff] text-white w-[184px] h-[66px] rounded-[40px] mt-[30px]'>
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute left-[884px] bottom-[170px]">
                <img src={Mie} />
            </div>

            <h1 className="ml-[100px] mt-[132px] text-[32px]">Kenapa memilih kami?</h1>    
            <Kategori/>

            <h1 className="ml-[100px] mt-[130px] text-[32px]">Pilihan Daerah</h1> 
            <h3 className="ml-[100px] w-[707px] h-[32px] mt-[8px] text-[20px] font-extralight">Temukan makanan dan minuman terbaik di daerah anda</h3> 

            <Daerah/>
            <img src={Ilustrator} className="ml-[37px]"/>
            <div className="ml-[700px] relative bottom-[350px]">
                <h1 className="w-[504px] h-[47px] text-[28px] font-semibold ">Bantu Restoran Kaki Lima Yuk!</h1>
                <h3 className="w-[627px] h-[86px] text-[16px] font-extralight mt-[34px]">Dengan kamu menggunakan Kuliner.go ini kamu bisa membantu perekonomian mereka yang sebelumnya terhambat oleh pandemi covid-19</h3>
            </div>
            <img src={Bakso} className="ml-[900px]"/>
            <div className="ml-[100px] relative bottom-[280px]">
                <h1 className="w-[730px] h-[47px] text-[28px] font-semibold ">Mari Lestarikan Makanan dan Minuman Lokal</h1>
                <h3 className="w-[627px] h-[86px] text-[16px] font-extralight py-[34px]">
                Dengan kamu menjaga makanan dan minuman lokal, kamu bisa menikmati berbagai macam makanan dan minuman daerah yang belum pernah kamu coba sebelumnya
                </h3>
            </div>
            <Count/>
            
            <h1 className="ml-[60px] mt-[130px] text-[32px]">Artikel dan Festival</h1> 
            <h3 className="ml-[60px] w-[1465px] h-[36px] mt-[8px] text-[20px] font-extralight">
                Dapatkan informasi berita dan event terbaru seputar proses digitalisasi bisnis kuliner Indonesia.
                <span className="text-end relative bottom-[30px]">
                    <Link to='Artikel-Page'>
                        <h3 className="text-[#0190ff] underline cursor-pointer hover:text-gray-500">
                            Lihat semua
                        </h3>
                    </Link>
                </span>
            </h3> 
            <Artikel className='absolute left-[30px]'/>
        </div>
    )
}

export default Home;
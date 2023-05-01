import React from "react";
import Tumpeng from '../assets/tumpeng.png';
import Tasty from '../assets/tasty.png';
import Booking from '../assets/booking.png';
import MapLocation from '../assets/map.png';

const Kategori = () => {
    return(
        <div className="grid grid-rows-none md:grid-cols-4 md:my-3 row-span-4 my-[76px]">
            <div>
                <img src={Tumpeng} className="w-[100px] h-[100px] ml-[179px] mt-[28px]" />
                <h1 className="w-[190px] text-[18px] font-semibold text-center ml-[135px] py-4">Aneka Makanan Nusantara</h1>
                <h2 className="w-[224px] h-[72px] text-[16px] font-extralight text-center ml-[115px]">
                    Platform kami menyediakan 
                    berbagai jenis masakan khas 
                    dari nusantara
                </h2>
            </div>
            <div>
                <img src={Tasty} className="w-[100px] h-[100px] ml-[179px] mt-[28px]" />
                <h1 className="w-[190px] text-[18px] font-semibold text-center ml-[135px] py-4">Rasa Terbaik</h1>
                <h2 className="w-[224px] h-[72px] text-[16px] font-extralight text-center ml-[115px]">
                Kami menyediakan berbagai
                pilihan makanan khas nusantara
                dengan cita rasa terbaik
                </h2>
            </div>
            <div>
                <img src={Booking} className="w-[100px] h-[100px] ml-[179px] mt-[28px]" />
                <h1 className="w-[190px] text-[18px] font-semibold text-center ml-[135px] py-4">Pesan Tempatmu</h1>
                <h2 className="w-[224px] h-[72px] text-[16px] font-extralight text-center ml-[115px]">
                Pelanggan dapat memesan
                tempat sebelum mereka datang
                ke tempat makan
                </h2>
            </div>
            <div>
                <img src={MapLocation} className="w-[100px] h-[100px] ml-[179px] mt-[28px]" />
                <h1 className="w-[190px] text-[18px] font-semibold text-center ml-[135px] py-4">Temukan Restoran</h1>
                <h2 className="w-[224px] h-[72px] text-[16px] font-extralight text-center ml-[115px]">
                Jelajahi dan temukan
                restoran yang kalian inginkan
                melalui Kuliner.Go
                </h2>
            </div>
        </div>
    )
}

export default Kategori;
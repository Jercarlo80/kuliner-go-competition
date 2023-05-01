import React from "react";

import Bandung from '../assets/Bandung.png';
import Jakarta from '../assets/Jakarta.png';
import Semarang from '../assets/Semarang.png';
import Lainnya from '../assets/lainnya.png';

const Daerah = () => {
    return(
        <div className='flex flex-rows-none md:flex-cols-4 md:my-3 row-span-1 my-[76px] '>
            <div>
                <img src={Bandung} className="ml-[100px] mt-[28px] brightness-[40%]"/>
                <h1 className="ml-[120px] text-[32px] font-semibold text-white mt-3 relative bottom-[150px]">Bandung</h1>
                <h3 className="ml-[120px] text-[20px] font-extralight text-white mt-3 relative bottom-[150px]">Lihat aneka kuliner khas Bandung</h3>
            </div>
            <div className="">
                <img src={Jakarta} className="ml-[100px] mt-[28px] brightness-[40%]"/>
                <h1 className="ml-[120px] text-[32px] font-semibold text-white mt-3 relative bottom-[150px]">Jakarta</h1>
                <h3 className="ml-[120px] text-[20px] font-extralight text-white mt-3 relative bottom-[150px]">Lihat aneka kuliner khas Jakarta</h3>
            </div>
            <div className="">
                <img src={Semarang} className="ml-[100px] mt-[28px] brightness-[40%]"/>
                <h1 className="ml-[120px] text-[32px] font-semibold text-white mt-3 relative bottom-[150px]">Semarang</h1>
                <h3 className="ml-[120px] text-[20px] font-extralight text-white mt-3 relative bottom-[150px]">Lihat aneka kuliner khas Semarang</h3>
            </div>
            <div className="mr-[60px]">
                <img src={Lainnya} className="ml-[100px] mt-[28px] brightness-[40%]"/>
                <h1 className="ml-[120px] text-[32px] font-semibold text-white mt-3 relative bottom-[150px]">Lainnya</h1>
                <h3 className="ml-[120px] text-[20px] font-extralight text-white mt-3 relative bottom-[150px]">Lihat aneka kuliner khas Indonesia</h3>
            </div>
        </div>
    )
}

export default Daerah;
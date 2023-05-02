import React from "react";

import Artikel01 from '../assets/artikel01.png';
import Artikel02 from '../assets/artikel02.png';
import Artikel03 from '../assets/artikel03.png';

const Artikel = () => {
    return(
        <div className="grid grid-rows-none md:grid-cols-4 md:my-3 row-span-4 my-[76px]">
            <div className="ml-[66px]">
                <img src={Artikel01}/>
                <h2 className="w-[344px] h-[66px] mt-[14px] text-[16px] font-medium text-start">
                    Food Festival di Bandung, Tersedia
                    berbagai makanan khas Sunda
                </h2>
                <div className="space-x-[26px] mt-[6px]">
                    <button className="border border-[#0190ff] border- bg-white text-[#0190ff] w-[90px] h-[30px] rounded-[20px]">
                        Festival
                    </button>
                    <button className="border border-[#0190ff] bg-white text-[#0190ff] w-[90px] h-[30px] rounded-[20px]">
                        Inovasi
                    </button>
                </div>
                <p className="w-[102px] h-[24px] mt-[16px] text-[16px] text-[#586A86] font-light">30 April 2023</p>
            </div>
            <div className="ml-[66px]">
                <img src={Artikel02}/>
                <h2 className="w-[344px] h-[66px] mt-[14px] text-[16px] font-medium text-start">
                Food Festival di Sleman, Tersedia
                berbagai makanan khas Jogja
                </h2>
                <div className="space-x-[26px] mt-[6px]">
                    <button className="border border-[#0190ff] border- bg-white text-[#0190ff] w-[90px] h-[30px] rounded-[20px]">
                        Festival
                    </button>
                    <button className="border border-[#0190ff] bg-white text-[#0190ff] w-[90px] h-[30px] rounded-[20px]">
                        Inovasi
                    </button>
                </div>
                <p className="w-[102px] h-[24px] mt-[16px] text-[16px] text-[#586A86] font-light">22 April 2023</p>
            </div>
            <div className="ml-[66px]">
                <img src={Artikel03}/>
                <h2 className="w-[344px] h-[66px] mt-[14px] text-[16px] font-medium text-start">
                Resep rendang daging sapi untuk
                menu lebaran    
                </h2>
                <div className="space-x-[26px] mt-[6px]">
                    <button className="border border-[#0190ff] border- bg-white text-[#0190ff] w-[90px] h-[30px] rounded-[20px]">
                        Festival
                    </button>
                    <button className="border border-[#0190ff] bg-white text-[#0190ff] w-[90px] h-[30px] rounded-[20px]">
                        Inovasi
                    </button>
                </div>
                <p className="w-[102px] h-[24px] mt-[16px] text-[16px] text-[#586A86] font-light">17 April 2023</p>
            </div>
            <div className="ml-[66px]">
                <img src={Artikel01}/>
                <h2 className="w-[344px] h-[66px] mt-[14px] text-[16px] font-medium text-start">
                    Food Festival di Bandung, Tersedia
                    berbagai makanan khas Sunda
                </h2>
                <div className="space-x-[26px] mt-[6px]">
                    <button className="border border-[#0190ff] border- bg-white text-[#0190ff] w-[90px] h-[30px] rounded-[20px]">
                        Festival
                    </button>
                    <button className="border border-[#0190ff] bg-white text-[#0190ff] w-[90px] h-[30px] rounded-[20px]">
                        Inovasi
                    </button>
                </div>
                <p className="w-[102px] h-[24px] mt-[16px] text-[16px] text-[#586A86] font-light">12 April 2023</p>
            </div>
        </div>
    )
}

export default Artikel;
import React from "react";
import { Card } from "../components/card";
import Kuliner1 from "../assets/kuliner1.png";
import Kuliner2 from "../assets/kuliner2.png";
import Kuliner3 from "../assets/kuliner3.png";
import Kuliner4 from "../assets/kuliner4.png";
const Terdekatku = () => {
  return (
    <div className="relative w-full h-[1535px] mx-auto">
      <h1 className="text-[30px] w-[1050px] h-[100px] absolute top-[120px] ml-[76px] ">
        Terdekatku
      </h1>
      <h1 className="text-[24px] w-[1050px] h-[100px] absolute top-[100px] ml-[76px] font-extralight mt-20 ">
        Temukan lebih banyak penjual makanan terdekat di sekitar anda
      </h1>
      <div className="absolute mt-[260px] ml-[60px]">
        <div className="grid grid-rows-none md:grid-cols-4 md:my-3 row-span-3 gap-20">
          <Card
            image={Kuliner1}
            title="Peuyeum Khas Bandung"
            rate="4.5"
            location="Jl. Padomoro Boulevard, Buah Batu, Kabupaten Bandung, Jawa Barat"
          />  
          <Card
            image={Kuliner2}
            title="Bolu Susu Lembang"
            rate="4.7"
            location="Jl. Telekomunikasi, Buah Batu, Kabupaten Bandung, Jawa Barat"
          />
          <Card
            image={Kuliner3}
            title="Pisang Bolen Kartika Sari"
            rate="5.0"
            location="Jl. Raya Buah Batu, Buah Batu, Kabupaten Bandung, Jawa Barat"
          />
          <Card
            image={Kuliner4}
            title="Kue Balok Lembang"
            rate="4.9"
            location="Jl. Raya DI Pandjaitan, Buah Batu, Kabupaten Bandung, Jawa Barat"
          />
        </div>
      </div>
    </div>
  );
};

export default Terdekatku;

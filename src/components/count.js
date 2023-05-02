import React from "react";
import {  useSpring, animated  } from 'react-spring';
import '../css/style.css';

function Number({n}) {
    const { number } = useSpring({
        from: {number: 0},
        number: n, 
        delay: 250,
        config: {mass: 1, tension: 20, frinction: 10},
    });
    return <animated.div>
        {number.to((n) => n.toFixed(0))}
    </animated.div>
}

const Count = () => {
    return(
        <div className="w-[1510px] h-[440px] bg-[#0190ff] ml-[40px] mr-[40px] rounded-[18px]">
            <h1 className="text-white text-[50px] font-medium px-[500px] py-[78px]">Pencapaian kami</h1>
            <div className="flex ">
                <div className="text-white text-[48px] ml-[175px]">
                    <Number n={500} />
                    <p className="w-[292px] text-[24px] text-center h-[72px] absolute left-[120px] ">UMKM telah bergabung dengan kami</p>
                </div>
                <div className="text-white text-[48px] absolute left-[700px]">
                    <Number n={12000} />
                    <p className="w-[327px] text-[24px] text-center h-[72px] absolute right-[-100px] ">Jumlah transaksi perbulan pada platform kami</p>
                </div>
                <div className="text-white text-[48px] absolute left-[1200px]">
                    <Number n={24000} />
                    <p className="w-[327px] text-[24px] text-center h-[72px] absolute right-[-100px] ">Pengguna yang telah bergabung dengan kami</p>
                </div>
            </div>
        </div>
    )
}

export default Count;
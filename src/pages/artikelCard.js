import React from 'react'
import Star from '../assets/star01.png';
import Artikel01 from '../assets/artikel01.png';
import Artikel02 from '../assets/artikel02.png';
import Artikel03 from '../assets/artikel03.png';
import Artikel04 from '../assets/artikel02.png';
import Artikel05 from '../assets/artikel05.png';
import Artikel06 from '../assets/artikel06.png';
import News from '../assets/news.png';

const ArtikelCard = () => {
  return (
    <div className='h-[2000px]'>
      <h1 className="ml-[60px] mt-[130px] text-[32px]">Artikel dan Festival</h1> 
        <h3 className="ml-[60px] w-[1465px] h-[36px] mt-[8px] text-[20px] font-extralight">
          Dapatkan informasi berita dan event terbaru seputar proses digitalisasi bisnis kuliner Indonesia.    
        </h3> 
        <div className='flex'>
          <img src={Star} className='ml-[122px] mt-[36px]'/>
          <div className='text-[24px] font-semibold relative bottom-[-45px] ml-[26px]'>Terbaru</div>
        </div>
        <div className='ml-[122px] mt-[59px]'>
          <img src={Artikel01} className='w-[620px] h-[408.86px]'/>
          <h2 className="w-[559px] h-[96px] mt-[14px] text-[32px] font-medium text-start">
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
        <div className='ml-[829px] absolute bottom-[92px]'>
          <img src={Artikel06} className='w-[180px] h-[190px]'/>
          <div className='ml-[200px] relative bottom-[200px]'>
            <h2 className="w-[327px] h-[60px] mt-[14px] text-[20px] font-medium text-start">
            Meriahnya bazar makanan 
            di Malang, terdapat 200 UMKM...
            </h2>
            <div className="space-x-[26px] mt-[12px]">
                <button className="border border-[#0190ff] border- bg-white text-[#0190ff] w-[90px] h-[30px] rounded-[20px]">
                  Festival
                </button>
                <button className="border border-[#0190ff] bg-white text-[#0190ff] w-[90px] h-[30px] rounded-[20px]">
                  Inovasi
                </button>
            </div>
            <p className="w-[102px] h-[24px] mt-[16px] text-[16px] text-[#586A86] font-light">21 April 2023</p>
          </div>
        </div>
        <div className='ml-[829px] absolute bottom-[-120px]'>
          <img src={Artikel05} className='w-[180px] h-[190px]'/>
          <div className='ml-[200px] relative bottom-[200px]'>
            <h2 className="w-[327px] h-[60px] mt-[14px] text-[20px] font-medium text-start">
            Meriahnya bazar makanan 
            di Malang, terdapat 200 UMKM...
            </h2>
            <div className="space-x-[26px] mt-[12px]">
                <button className="border border-[#0190ff] border- bg-white text-[#0190ff] w-[90px] h-[30px] rounded-[20px]">
                  Festival
                </button>
                <button className="border border-[#0190ff] bg-white text-[#0190ff] w-[90px] h-[30px] rounded-[20px]">
                  Inovasi
                </button>
            </div>
            <p className="w-[102px] h-[24px] mt-[16px] text-[16px] text-[#586A86] font-light">21 April 2023</p>
          </div>
        </div>
        <div className='flex'>
          <img src={News} className='ml-[122px] mt-[36px]'/>
          <div className='text-[24px] font-semibold relative bottom-[-45px] ml-[26px]'>Semua Berita</div>
        </div>
        








        <div className="grid grid-rows-none md:grid-cols-4 md:my-3 row-span-4 my-[76px]">
          <div className="ml-[123px] mt-[49px]">
                <img src={Artikel01} className='w-[402px] h-[265ox]'  />
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
          <div className="ml-[123px] mt-[49px]">
                <img src={Artikel02} className='w-[402px] h-[265ox]'  />
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
          <div className="ml-[123px] mt-[49px]">
                <img src={Artikel03} className='w-[402px] h-[265ox]' />
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
          
        </div>
        <div className="grid grid-rows-none md:grid-cols-4 md:my-3 row-span-4 my-[76px]">
          <div className="ml-[123px] mt-[49px]">
                <img src={Artikel04} className='w-[402px] h-[265ox]'  />
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
          <div className="ml-[123px] mt-[49px]">
                <img src={Artikel01} className='w-[402px] h-[265ox]'  />
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
          <div className="ml-[123px] mt-[49px]">
                <img src={Artikel02} className='w-[402px] h-[265ox]' />
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
          
        </div>
        
       
    </div>
  )
}

export default ArtikelCard;

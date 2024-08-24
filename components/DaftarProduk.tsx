'use client';

import { useState } from 'react';
import SubDaftarProduk from './DaftarProduk/SubDaftarProduk';
// import TabsCarousel from './ui/TabsCarousel';

const listProduk = [
  {
    name: 'For You',
    target: 'for-you',
    color: 'xs:bg-[#a32070] bg-white',
  },
  {
    name: 'Makanan Ringan',
    target: 'makanan-ringan',
    color: 'xs:bg-[#f8af08] bg-white',
  },
  {
    name: 'Jeans & Denim Wanita',
    target: 'jeans-dan-denim-wanita',
    color: 'xs:bg-[#189547] bg-white',
  },
  {
    name: 'Aksesoris Dapur',
    target: 'aksesoris-dapur',
    color: 'xs:bg-[#a32070] bg-white',
  },
  {
    name: 'Mirip yang kamu cek',
    target: 'mirip-yang-kamu-cek',
    color: 'xs:bg-[#0983a9] bg-white',
  },
];

function DaftarProduk() {
  const [dProduk, setDProduk] = useState('for-you');
  const [more, setMore] = useState(false);

  return (
    <div className="w-full py-5">
      <div className={`sticky xs:top-28 top-16 pt-5 bg-white`}>
        <div className="flex gap-2 w-full overflow-x-auto custom-scrollbar">
          {listProduk.map((item, index) => (
            <button
              key={index}
              onClick={() => setDProduk(item.target)}
              className={`flex flex-col flex-shrink-0 xs:w-[215px] xs:h-16 w-fit h-fit ${item.color} rounded-lg p-2 relative`}
            >
              <div
                className={`absolute xs:top-2 bottom-0 xs:left-auto xs:-translate-x-0 left-1/2 -translate-x-1/2 w-10 xs:h-1 h-0.5 rounded-md xs:bg-white bg-black transition-all duration-300 origin-left ${
                  dProduk === item.target
                    ? 'scale-x-100 opacity-100'
                    : 'scale-x-0 opacity-0'
                }`}
              ></div>
              <span className="xs:text-white text-customTokped-medium font-semibold truncate xs:text-base text-lg">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 xs:gap-2 gap-0 mt-5">
        <SubDaftarProduk value={dProduk} more={more} />
      </div>
      <div className="flex justify-center mt-5">
        <button
          onClick={() => setMore(true)}
          className="border border-customTokped-netral text-customTokped-netral px-20 py-3 font-bold rounded-xl text-base"
        >
          Muat Lebih Banyak
        </button>
      </div>
    </div>
  );
}

export default DaftarProduk;

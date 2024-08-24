'use client';

import About from '@/components/About';
import BannerPromosi from '@/components/BannerPromosi';
import BukaToko from '@/components/BukaToko';
import CariTokopedia from '@/components/CariTokopedia';
import Cod from '@/components/Cod';
import DaftarProduk from '@/components/DaftarProduk';
import FlashSale from '@/components/FlashSale';
import Footer from '@/components/Footer';
import KategoriPilihan from '@/components/KategoriPilihan';
import KategoriSmall from '@/components/KategoriSmall';
import Trending from '@/components/Trending';
import { useSelector } from 'react-redux';

export default function Home() {
  const { kategoriDaftarProduk } = useSelector(
    (state: any) => state.counterSlice
  );

  return (
    <div className=" w-full relative ">
      <div
        className={`w-full h-full bg-black/50 absolute z-10 ${
          kategoriDaftarProduk ? 'xs:block hidden' : 'hidden'
        }`}
      ></div>
      <div className="xs:flex hidden items-center rounded-full shadow-xl px-4 py-2.5 fixed bottom-[5%] right-[5%] z-10 bg-white cursor-pointer">
        <svg
          className="unf-icon"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="var(--GN500, #00AA5B)"
          style={{
            display: 'inline-block',
            marginRight: '8px',
            verticalAlign: 'middle',
          }}
        >
          <path d="M17 3.25H7A3.71 3.71 0 0 0 3.25 7v14a.76.76 0 0 0 .41.67.84.84 0 0 0 .34.08.74.74 0 0 0 .45-.15l3.8-2.85H17A3.71 3.71 0 0 0 20.75 15V7A3.71 3.71 0 0 0 17 3.25Zm-4 10.49H8a.75.75 0 1 1 0-1.5h5a.75.75 0 1 1 0 1.5Zm3-4H8a.75.75 0 0 1 0-1.5h8a.75.75 0 1 1 0 1.5Z" />
        </svg>
        <span className=" font-bold text-customTokped-netral">Chat</span>
      </div>

      <div className="w-full lg:px-9 xs:px-4 px-0 py-2 bg-white">
        <BannerPromosi />
        <KategoriSmall />
        <KategoriPilihan />
      </div>
      <div className="w-full lg:px-9 px-4 xs:mb-1.5 mb-0 bg-white">
        <FlashSale />
        <Trending />
        <Cod />
      </div>
      <div className="w-full lg:px-9 px-4 xs:mt-1.5 my-0 bg-white">
        <DaftarProduk />
        <CariTokopedia />
        <BukaToko />
        <About />
      </div>
      <div className="w-full lg:px-16 px-0 py-8 bg-white xs:border-t border-none border-slate-300">
        <Footer />
      </div>
    </div>
  );
}

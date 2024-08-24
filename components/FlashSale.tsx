import React from 'react';
import MainCarousel from './FlashSale/MainCarousel';
import Image from 'next/image';
import CountdownTimer from './FlashSale/CountdownTimer';

function FlashSale() {
  return (
    <div className="flex flex-col xs:py-5 py-2 gap-3 xs:border-b border-none">
      <div className="flex sm:flex-row flex-col sm:gap-3 gap-0 xs:items-end items-start">
        <h2 className="text-xl font-bold">Flash Sale</h2>
        <div className="flex items-end gap-3">
          <p className="text-customTokped-medium xs:text-sm text-xs">
            Berakhir dalam
          </p>
          <div className="xs:text-sm text-xs">
            <CountdownTimer />
          </div>
          <a
            href=""
            className="text-customTokped-netral font-semibold xs:text-sm text-xs"
          >
            Lihat semua
          </a>
        </div>
      </div>
      <div className="sm:max-h-80 max-h-72 xs:-mx-0 -mx-4 relative">
        <div className="sm:h-80 h-72 sm:w-[295px] w-full bg-[#bcaffe] xs:rounded-lg rounded-none sm:pl-10 pl-0">
          <Image
            src="https://images.tokopedia.net/img/cache/240/zssuBf/2024/7/31/685a7363-dd3b-4298-9c85-e3e43fce54c8.png.webp?ect=4g"
            alt="flashsale"
            width={250}
            height={250}
            className="sm:w-1/2 w-1/3 h-full  xs:rounded-lg rounded-none"
          />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 lg:w-5/6 md:w-4/5 sm:w-3/4 w-[70%] right-0">
          <MainCarousel />
        </div>
      </div>
    </div>
  );
}

export default FlashSale;

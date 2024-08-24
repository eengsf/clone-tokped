'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { CiSearch } from 'react-icons/ci';

import Location from './NavbarBottom/Location';
import FindList from './NavbarBottom/FindList';
import ShoppingCart from './NavbarBottom/ShoppingCart';
import Kategori from './NavbarBottom/Kategori';

function NavbarBottom() {
  return (
    <div className="flex flex-col justify-between lg:px-9 xs:px-4 px-2 py-2.5 gap-3">
      <div className="flex">
        <div className="md:flex  justify-between items-center w-64 hidden">
          <Link href={'/'}>
            <Image
              src="https://images.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
              width={150}
              height={150}
              alt="logo"
              priority
            />
          </Link>
          <Kategori />
        </div>
        <div className="relative flex-1 md:px-5 px-0 items-center">
          <CiSearch
            size={22}
            className="absolute md:left-8 left-3 text-customTokped-medium -translate-y-1/2 top-1/2"
          />
          <input
            type="text"
            placeholder="Cari di Tokopedia"
            className="w-full h-10 pl-11  focus:outline-none border border-slate-400 rounded-md focus:border-customTokped-netral"
          />
        </div>
        <div className="flex divide-x items-center md:pl-7 md:gap-7 pl-3 gap-3">
          <ShoppingCart />
          <div className="xs:flex hidden gap-3 md:pl-7 pl-3">
            <button className="xs:text-customTokped-netral font-bold border-customTokped-netral xs:bg-white text-xs border rounded-md px-4 py-1 text-white bg-customTokped-netral ">
              Masuk
            </button>
            <button className="text-white bg-customTokped-netral font-bold text-xs rounded-md px-4 py-1.5 xs:block hidden">
              Daftar
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="md:w-64 w-0"></div>
        <FindList />
        <div className="lg:block xs:hidden block">
          <Location />
        </div>
      </div>
    </div>
  );
}

export default NavbarBottom;

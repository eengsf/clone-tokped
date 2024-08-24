'use client';

import { MdOutlinePhoneAndroid } from 'react-icons/md';
import Link from 'next/link';
import QRCode from 'qrcode.react';
import Image from 'next/image';
import FindList from './NavbarTop/FindList';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

function NavbarTop() {
  return (
    <div className="xs:flex hidden gap-10 justify-between lg:px-9 xs:px-4 px-2 py-1.5 bg-customTokped-light ">
      <div>
        <HoverCard openDelay={0}>
          <HoverCardTrigger className="flex gap-1 items-center">
            <MdOutlinePhoneAndroid
              size={22}
              className="text-customTokped-medium"
            />
            <span className="text-xs text-customTokped-medium hover:text-customTokped-netral cursor-pointer">
              Download Tokopedia App
            </span>
          </HoverCardTrigger>
          <HoverCardContent className="flex justify-between items-center gap-0 w-[430px] h-56 [box-shadow:_1px_1px_3px_rgba(0,0,0,0.25),_-1px_-1px_3px_rgba(0,0,0,0.25)] rounded-lg translate-x-8 translate-y-1 p-8 z-20">
            <div className="p-1.5 rounded-md border border-customTokped-netral">
              <QRCode value="https://www.tokopedia.com/" size={150} />
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col text-center">
                <span className="text-sm text-customTokped-dark">
                  Scan this QR or download
                </span>
                <span className="text-sm text-customTokped-dark">
                  app from:
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="#" className="rounded-md cursor-pointer">
                  <Image
                    src="/img/play-store.png"
                    alt="app-store"
                    width={120}
                    height={120}
                    priority
                  />
                </Link>
                <Link href="#" className="rounded-md cursor-pointer">
                  <Image
                    src="/img/app-store.png"
                    alt="app-store"
                    width={120}
                    height={120}
                    priority
                  />
                </Link>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <FindList />
    </div>
  );
}

export default NavbarTop;

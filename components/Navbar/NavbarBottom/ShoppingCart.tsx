import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

import Image from 'next/image';
// import { PiShoppingCartSimple } from 'react-icons/pi';
import { useDispatch } from 'react-redux';
import { setKategoriDaftarProduk } from '@/store/slice/counterSlice';
import { RxHamburgerMenu } from 'react-icons/rx';

function ShoppingCart() {
  const dispatch = useDispatch();
  return (
    <HoverCard
      openDelay={0}
      onOpenChange={() => dispatch(setKategoriDaftarProduk())}
    >
      <HoverCardTrigger className="relative">
        <div className="flex gap-2.5 items-center cursor-pointer p-2 rounded-md hover:bg-customTokped-light">
          <svg
            className="unf-icon xs:hidden block"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="var(--NN900, #2E3137)"
            // style={{ display: 'inline-block', verticalAlign: 'middle' }}
          >
            <path d="M20 4.25H4A1.76 1.76 0 0 0 2.25 6v12A1.76 1.76 0 0 0 4 19.75h16A1.76 1.76 0 0 0 21.75 18V6A1.76 1.76 0 0 0 20 4.25Zm-1 1.5-6.09 4.63a1.32 1.32 0 0 1-1.51 0L5.16 5.75H19Zm1 12.5H4a.25.25 0 0 1-.25-.25V6.57l6.71 5a2.86 2.86 0 0 0 3.29 0l6.5-4.94V18a.25.25 0 0 1-.25.25Z" />
          </svg>
          <svg
            className="unf-icon xs:hidden block"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="var(--NN900, #2E3137)"
            // style={{ display: 'inline-block', verticalAlign: 'middle' }}
          >
            <path d="M21 17.25h-1.25V11a7.76 7.76 0 0 0-6.06-7.56 2.12 2.12 0 0 0 .06-.44 1.75 1.75 0 0 0-3.5 0c.005.148.025.296.06.44A7.76 7.76 0 0 0 4.25 11v6.25H3a.75.75 0 1 0 0 1.5h5.25V19a3.75 3.75 0 0 0 7.5 0v-.25H21a.75.75 0 1 0 0-1.5ZM14.25 19a2.25 2.25 0 0 1-4.5 0v-.25h4.5V19Zm.75-1.75H5.75V11a6.25 6.25 0 0 1 12.5 0v6.25H15Z" />
          </svg>
          <svg
            className="unf-icon"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="var(--NN900, #2E3137)"
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
          >
            <path d="M21.68 7.56a1.908 1.908 0 0 0-.35-.66 1.71 1.71 0 0 0-.58-.46 1.85 1.85 0 0 0-.75-.19H6.17a1.82 1.82 0 0 0-.57.13l-.06-.3a1.91 1.91 0 0 0-2-1.83h-1a.75.75 0 0 0 0 1.5h1c.42 0 .49.07.57.59l1.09 5.54.54 2.78A3.86 3.86 0 0 0 7 16.89a3.76 3.76 0 0 0 1.54.75A2 2 0 0 0 8 19a2 2 0 0 0 4 0 2 2 0 0 0-.46-1.25h2.88a2 2 0 1 0 3.06-.12 3.8 3.8 0 0 0 1.46-.7 3.71 3.71 0 0 0 1.32-2.1l1.47-6.46V8.3a1.68 1.68 0 0 0-.05-.74Zm-2.89 6.93a2.24 2.24 0 0 1-2.2 1.76H9.38a2.25 2.25 0 0 1-2.19-1.82L6 8.1A.62.62 0 0 1 6 8v-.14a.39.39 0 0 1 .1-.08H20a.28.28 0 0 1 .13 0 .389.389 0 0 1 .1.08c.03.03.05.069.06.11a.405.405 0 0 1 0 .11l-1.5 6.41Z" />
          </svg>
          <RxHamburgerMenu size={24} className="xs:hidden block" />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="absolute top-2 translate-x-[-50%] w-[470px] h-[335px] rounded-md shadow-md xs:flex hidden flex-col items-center p-5 gap-5">
        <Image
          src="https://images.tokopedia.net/img/purchase-platform/illustration/empty-state-pp.png"
          width={130}
          height={130}
          alt="shopping cart"
          priority
        />
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-xl text-customTokped-dark">
            Wah, keranjang belanjamu kosong
          </h2>
          <p className="font-normal text-sm text-customTokped-medium">
            Yuk, isi dengan barang-barang impianmu!
          </p>
        </div>
        <Button
          variant={'outline'}
          className="border border-customTokped-netral text-customTokped-netral px-10"
        >
          Mulai Belanja
        </Button>
      </HoverCardContent>
    </HoverCard>
  );
}

export default ShoppingCart;

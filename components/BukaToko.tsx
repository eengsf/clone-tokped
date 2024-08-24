import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';

function BukaToko() {
  return (
    <div className="flex gap-3 justify-between items-center pb-5  border-b border-dashed border-slate-300">
      <div className="flex flex-col xs:gap-6 gap-2">
        <h2 className="text-base font-bold text-[#f8af08]">
          Punya Toko Online? Buka cabangnya di Tokopedia
        </h2>
        <p className="text-xs text-customTokped-medium">
          Mudah, nyaman dan bebas Biaya Layanan Transaksi.
          <span className="font-bold">{` `}GRATIS!</span>
        </p>
        <div className="flex gap-3 items-end">
          <Button className="text-xs font-bold bg-customTokped-netral hover:bg-customTokped-netraldark">
            Buka Toko GRATIS
          </Button>
          <Link
            href={'/'}
            className="text-xs font-bold text-customTokped-netral hover:text-[#f8af08]"
          >
            Pelajari lebih lanjut
          </Link>
        </div>
      </div>
      <div className="xs:block hidden">
        <Image
          src="https://images.tokopedia.net/seocontent/SEOcontent1.jpg?ect=4g"
          alt="buka toko"
          width={450}
          height={450}
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default BukaToko;

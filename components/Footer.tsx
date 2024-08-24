import Image from 'next/image';
import { Button } from './ui/button';

function Footer() {
  return (
    <div className="flex w-full xs:gap-7 gap-0 lg:justify-normal sm:justify-center">
      <div className="lg:flex flex-shrink-0 hidden gap-3 ">
        <nav className="flex flex-col gap-2">
          <h2 className="font-bold whitespace-nowrap">Tokopedia</h2>
          <ul className="grid grid-cols-1 gap-2 text-sm text-customTokped-medium">
            <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
              Tentang Tokopedia
            </li>
            <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
              Hak Kekayaan Intelektual
            </li>
            <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
              Karir
            </li>
            <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
              Blog
            </li>
            <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
              Tokopedia Parents
            </li>
            <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
              Tokopedia Affiliate Program
            </li>
            <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
              Tokopedia B2B Digital
            </li>
            <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
              Tokopedia Marketing Solutions
            </li>
            <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
              Kalkulator Indeks Masa Tubuh
            </li>
            <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
              Tokopedia Farma
            </li>
            <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
              Promo Hari Ini
            </li>
            <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
              Langsung Laku
            </li>
            <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
              Beli Lokal
            </li>
            <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
              Tukar Tambah Laptop
            </li>
            <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
              Promo 6.6
            </li>
          </ul>
        </nav>

        <div className="flex xl:flex-row flex-col gap-3">
          <div className="xs:flex hidden flex-col gap-3">
            <nav className="flex flex-col gap-2">
              <h2 className="font-bold whitespace-nowrap">Beli</h2>
              <ul className="flex flex-col gap-2 text-sm text-customTokped-medium">
                <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
                  Tagihan & Top Up
                </li>
                <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
                  Tokopedia COD
                </li>
                <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
                  Bebas Ongkir
                </li>
              </ul>
            </nav>
            <nav className="flex flex-col gap-2">
              <h2 className="font-bold whitespace-nowrap">Jual</h2>
              <ul className="flex flex-col gap-2 text-sm text-customTokped-medium">
                <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
                  Pusat Edukasi Seller
                </li>
                <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
                  Daftar Official Store
                </li>
              </ul>
            </nav>
            <nav className="flex flex-col gap-2">
              <h2 className="font-bold whitespace-nowrap">
                Bantuan dan Panduan
              </h2>
              <ul className="flex flex-col gap-2 text-sm text-customTokped-medium">
                <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
                  Tokopedia Care
                </li>
                <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
                  Syarat dan Ketentuan
                </li>
                <li className="hover:text-customTokped-netral cursor-pointer whitespace-nowrap">
                  {' '}
                  Kebijakan Privasi
                </li>
              </ul>
            </nav>
          </div>

          <div className="lg:flex hidden flex-col gap-3">
            <nav className="flex flex-col gap-2">
              <h2 className="font-bold whitespace-nowrap">
                Keamanan & Privasi
              </h2>
              <ul className="flex gap-3">
                <li>
                  <Image
                    src="https://images.tokopedia.net/img/unify/icon_pci_license.webp"
                    alt="keamanan"
                    width={70}
                    height={70}
                    priority
                    className="cursor-pointer"
                  />
                </li>
                <li className="border p-1.5 rounded-sm">
                  <Image
                    src="https://images.tokopedia.net/img/unify/icon_bsi_license_hd.png"
                    alt="keamanan"
                    width={70}
                    height={70}
                    priority
                    className="cursor-pointer"
                  />
                </li>
                <li className="border p-1.5 rounded-sm">
                  <Image
                    src="https://images.tokopedia.net/img/unify/icon_bsi_license_hd.png"
                    alt="keamanan"
                    width={70}
                    height={70}
                    priority
                    className="cursor-pointer"
                  />
                </li>
              </ul>
            </nav>
            <nav className="flex flex-col gap-2">
              <h2 className="font-bold whitespace-nowrap">Ikuti Kami</h2>
              <ul className="flex gap-3">
                <li>
                  <Image
                    src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/90f8d7cf.svg"
                    alt="facebook"
                    width={25}
                    height={25}
                    priority
                    className="cursor-pointer"
                  />
                </li>
                <li>
                  <Image
                    src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/bb6967ee.svg"
                    alt="twitter"
                    width={25}
                    height={25}
                    priority
                    className="cursor-pointer"
                  />
                </li>
                <li>
                  <Image
                    src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/c6c3a108.svg"
                    alt="pinterest"
                    width={25}
                    height={25}
                    priority
                    className="cursor-pointer"
                  />
                </li>
                <li>
                  <Image
                    src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/6bbf7298.svg"
                    alt="instagram"
                    width={25}
                    height={25}
                    priority
                    className="cursor-pointer"
                  />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col flex-1 px-3 gap-3 sm:items-center items-start">
          <Image
            src="https://images.tokopedia.net/img/unify/il_footer_hd_v2.png"
            alt="footer"
            width={400}
            height={400}
            className="hidden sm:block object-cover"
          />
          <div className="grid sm:grid-cols-3 grid-cols-2  gap-2 ">
            <Image
              src="https://assets.tokopedia.net/asts/assets-unify/img/icon-download-android.svg"
              alt="keamanan"
              width={120}
              height={120}
              className=" object-cover cursor-pointer"
            />
            <Image
              src="https://assets.tokopedia.net/asts/assets-unify/img/icon-download-ios.svg"
              alt="keamanan"
              width={120}
              height={120}
              className="object-cover cursor-pointer"
            />
            <Image
              src="https://assets.tokopedia.net/asts/assets-unify/img/icon-download-huawei.svg"
              alt="keamanan"
              width={120}
              height={120}
              className="object-cover cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="text-xs text-customTokped-medium">
              &copy; 2009 - 2024, PT. Tokopedia
            </p>
            <div className="flex gap-1">
              <Button className="text-xs text-white bg-customTokped-netral">
                Indonesia
              </Button>
              <Button className="text-xs text-customTokped-medium bg-white">
                English
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

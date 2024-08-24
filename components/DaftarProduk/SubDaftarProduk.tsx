import Image from 'next/image';
import { Card } from '../ui/card';
import { products } from '@/data/data';

function formatPrice(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function formatSold(sold: number): string {
  if (sold >= 1000) {
    return `${(sold / 1000).toFixed(1)}rb`;
  }
  return sold.toString();
}

function SubDaftarProduk({ value, more }: { value: string; more: boolean }) {
  let prod = products;
  let slicedProd: typeof products = [];

  // Mengatur data berdasarkan kondisi switch
  switch (value) {
    case 'makanan-kering':
      slicedProd = prod.slice(0, 12);
      break;
    case 'for-you':
      slicedProd = prod.slice(12, 24);
      break;
    case 'jeans-dan-denim-wanita':
      slicedProd = prod.slice(7, 19);
      break;
    case 'aksesoris-dapur':
      slicedProd = prod.slice(13, 25);
      break;
    case 'mirip-yang-kamu-cek':
      slicedProd = prod.slice().reverse().slice(0, 12);
      break;
  }

  if (more) {
    const beforeSlice = prod.slice(0, slicedProd[0].id - 1); // Data sebelum slice
    const afterSlice = prod.slice(slicedProd[slicedProd.length - 1].id); // Data setelah slice
    prod = [...slicedProd, ...afterSlice, ...beforeSlice];
  } else {
    prod = slicedProd;
  }

  // Mengembalikan JSX yang menampilkan produk
  return (
    <>
      {prod.map((item, index) => (
        <div key={index} className="p-1">
          <Card className="max-h-96 flex flex-col shadow-md">
            <div className="h-1/2">
              <Image
                src={item.img}
                alt={item.name}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="h-1/2 flex flex-col gap-1.5 p-1.5">
              <span className="text-sm line-clamp-2">{item.name}</span>
              <span className="text-lg font-bold">
                Rp.{formatPrice(item.harga)}
              </span>
              <span className="text-xs text-customTokped-medium">
                {item.kota}
              </span>
              <span className="text-xs text-customTokped-medium">
                {item.rating / 10} | {formatSold(item.terjual)} terjual
              </span>
            </div>
          </Card>
        </div>
      ))}
    </>
  );
}

export default SubDaftarProduk;

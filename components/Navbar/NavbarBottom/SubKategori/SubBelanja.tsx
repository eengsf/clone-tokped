'use client';

import { useState } from 'react';
import {
  subBelanja,
  audioKameraElektronik,
  rumahTangga,
  buku,
  dapur,
  elektronik,
  fashionAnakBayi,
  fashionMuslim,
  fashionPria,
  fashionWanita,
  filmMusic,
  gaming,
  handphoneTablet,
  ibuBayi,
  kecantikan,
  kesehatan,
  komputerLaptop,
  mainanHobi,
  makananMinuman,
  officeStationary,
  olahraga,
  otomotif,
  perawatanHewan,
  perawatanTubuh,
  perlengkapanPesta,
  pertukangan,
  properti,
  tiketTravelVoucher,
} from '@/data/data';
import Image from 'next/image';

const countTotalItems = (data: any) => {
  return data.reduce((acc: number, item: any) => acc + item.sub.length, 0);
};

function SubBelanja() {
  const [mouseOver, setMouseOver] = useState('rumah-tangga');
  let totalItems;

  const getSubCategory = () => {
    switch (mouseOver) {
      case 'rumah-tangga':
        totalItems = (countTotalItems(rumahTangga) / 5) * 40;
        return rumahTangga;
      case 'audio-kamera-elektronik':
        totalItems = (countTotalItems(audioKameraElektronik) / 4) * 40;
        return audioKameraElektronik;
      case 'buku':
        totalItems = (countTotalItems(buku) / 5) * 40;
        return buku;
      case 'dapur':
        totalItems = (countTotalItems(dapur) / 5) * 40;
        return dapur;
      case 'elektronik':
        totalItems = (countTotalItems(elektronik) / 5) * 40;
        return elektronik;
      case 'fashion-anak-bayi':
        totalItems = (countTotalItems(fashionAnakBayi) / 4.8) * 40;
        return fashionAnakBayi;
      case 'fashion-muslim':
        totalItems = (countTotalItems(fashionMuslim) / 4) * 40;
        return fashionMuslim;
      case 'fashion-pria':
        totalItems = (countTotalItems(fashionPria) / 5) * 40;
        return fashionPria;
      case 'fashion-wanita':
        totalItems = (countTotalItems(fashionWanita) / 5) * 40;
        return fashionWanita;
      case 'film-musik':
        totalItems = (countTotalItems(filmMusic) / 5) * 40;
        return filmMusic;
      case 'gaming':
        totalItems = (countTotalItems(gaming) / 5) * 40;
        return gaming;
      case 'handphone-tablet':
        totalItems = (countTotalItems(handphoneTablet) / 5) * 40;
        return handphoneTablet;
      case 'ibu-bayi':
        totalItems = (countTotalItems(ibuBayi) / 3.8) * 40;
        return ibuBayi;
      case 'kecantikan':
        totalItems = (countTotalItems(kecantikan) / 4.8) * 40;
        return kecantikan;
      case 'kesehatan':
        totalItems = (countTotalItems(kesehatan) / 4) * 40;
        return kesehatan;
      case 'komputer-laptop':
        totalItems = (countTotalItems(komputerLaptop) / 5) * 40;
        return komputerLaptop;
      case 'mainan-hobi':
        totalItems = (countTotalItems(mainanHobi) / 5) * 40;
        return mainanHobi;
      case 'makanan-minuman':
        totalItems = (countTotalItems(makananMinuman) / 5) * 40;
        return makananMinuman;
      case 'office-stationery':
        totalItems = (countTotalItems(officeStationary) / 5) * 40;
        return officeStationary;
      case 'olahraga':
        totalItems = (countTotalItems(olahraga) / 5) * 40;
        return olahraga;
      case 'otomotif':
        totalItems = (countTotalItems(otomotif) / 5) * 40;
        return otomotif;
      case 'perawatan-hewan':
        totalItems = (countTotalItems(perawatanHewan) / 4) * 40;
        return perawatanHewan;
      case 'perawatan-tubuh':
        totalItems = (countTotalItems(perawatanTubuh) / 5) * 40;
        return perawatanTubuh;
      case 'perlengkapan-pesta':
        totalItems = (countTotalItems(perlengkapanPesta) / 4.5) * 40;
        return perlengkapanPesta;
      case 'pertukangan':
        totalItems = (countTotalItems(pertukangan) / 5.5) * 40;
        return pertukangan;
      case 'properti':
        totalItems = (countTotalItems(properti) / 5) * 40;
        return properti;
      case 'tiket-travel-voucher':
        totalItems = (countTotalItems(tiketTravelVoucher) / 5) * 40;
        return tiketTravelVoucher;
      default:
        return [];
    }
  };

  const subCategories = getSubCategory();
  const selectedSubBelanja: any = subBelanja.find(
    (item) => item.target === mouseOver
  );

  return (
    <div className="flex gap-5 w-full h-full">
      <div className="w-48 h-full overflow-y-auto">
        {subBelanja.map((item, index) => (
          <div
            key={index}
            className=" text-xs font-bold py-2 px-4 rounded-md hover:bg-customTokped-light cursor-pointer"
            onMouseEnter={() => setMouseOver(item.target)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="w-[calc(100%-192px)] h-full overflow-y-auto py-3">
        <div className="flex gap-2 items-center ">
          {selectedSubBelanja?.img ? (
            <Image
              src={selectedSubBelanja?.img}
              alt={selectedSubBelanja?.name}
              width={30}
              height={30}
              priority
            />
          ) : null}
          <h3 className="text-xl font-bold">{selectedSubBelanja?.name}</h3>
          <p>{totalItems}</p>
        </div>
        <div
          className={`flex flex-col flex-wrap gap-6 py-4 w-fit`}
          style={{ height: `${totalItems}px` }}
        >
          {subCategories.map((kategori, index) => (
            <div key={index} className="space-y-3 w-44">
              <h2 className="text-xs font-bold cursor-pointer">
                {kategori.name}
              </h2>
              <ul className="w-full space-y-2.5">
                {kategori.sub.map((subkategori, subIndex) => (
                  <li
                    key={subIndex}
                    className="w-full text-xs cursor-pointer break-words"
                  >
                    {subkategori.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubBelanja;

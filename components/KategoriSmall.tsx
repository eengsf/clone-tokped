import Image from 'next/image';

const subKategori = [
  {
    name: 'Promo',
    target: 'promo',
    img: 'https://images.tokopedia.net/img/MIPuRC/2023/9/7/6f1e9e0b-c8df-4aa7-b087-ad2ca11dec57.png',
  },
  {
    name: 'Tokopedia Card',
    target: 'tokopedia-card',
    img: 'https://images.tokopedia.net/img/MIPuRC/2022/5/25/3bde8596-10c7-42c5-bc27-5c08fedaccd0.png',
  },
  {
    name: 'Dilayani Tokopedia',
    target: 'dilayani-tokopedia',
    img: 'https://images.tokopedia.net/img/MIPuRC/2023/9/7/390a1bc2-21f3-4a0a-a7c2-cdea6e4882a6.png',
  },
  {
    name: 'Tokopedia Farma',
    target: 'tokopedia-farma',
    img: 'https://images.tokopedia.net/img/MIPuRC/2024/2/27/3354a710-108f-43c1-a148-2cc63214dd3c.png',
  },
  {
    name: 'Cari Masjid',
    target: 'cari-masjid',
    img: 'https://images.tokopedia.net/img/MIPuRC/2024/3/25/3d241211-a018-4a18-badb-58cff2953e5d.png',
  },
  {
    name: 'Reksadana Syariah',
    target: ' reksadana-syariah',
    img: 'https://images.tokopedia.net/img/cache/100-square/MIPuRC/2021/9/6/4e424f6d-944b-4008-9e67-1aea1dce41f5.png',
  },
  {
    name: 'Kecantikan Halal',
    target: ' kecantikan-halal',
    img: 'https://images.tokopedia.net/img/cache/100-square/MIPuRC/2021/9/6/454c6ed1-fbe7-42fc-bb67-a73a837c9056.png',
  },
  {
    name: 'Kesehatan Halal',
    target: ' kesehatan-halal',
    img: 'https://images.tokopedia.net/img/cache/100-square/MIPuRC/2021/9/6/1989a788-ecc7-4c5b-bcb9-68e1e16884fd.png',
  },
  {
    name: 'Makanan & Minuman Halal',
    target: ' makanan-minuman-halal',
    img: 'https://images.tokopedia.net/img/cache/100-square/MIPuRC/2021/9/6/66cbc2a0-e24f-41be-bdec-a4661d8320bf.png',
  },
  {
    name: 'Fashion Muslim',
    target: ' fashion-muslim',
    img: 'https://images.tokopedia.net/img/cache/100-square/MIPuRC/2021/5/28/feb2229f-eed5-462d-8c0c-5494264a1904.png',
  },
];

function KategoriSmall() {
  return (
    <div className="xs:hidden gap-3 grid grid-cols-5 pt-3">
      {subKategori.map((item, index) => (
        <div key={index} className="flex flex-col items-center ">
          <Image src={item.img} alt={item.name} width={30} height={30} />
          <h2 className="text-xs text-center">{item.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default KategoriSmall;

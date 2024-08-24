import Image from 'next/image';

const subFeatured = [
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
  {
    name: 'Perlengkapan Ibadah',
    target: ' perlengkapan-ibadah',
    img: 'https://images.tokopedia.net/img/cache/100-square/MIPuRC/2021/9/6/43c3f6ab-e2e3-4e8f-8b78-a554dcd7bae4.png',
  },
  {
    name: "Al Qur'an",
    target: ' al-quran',
    img: 'https://images.tokopedia.net/img/cache/100-square/MIPuRC/2021/9/6/788ab547-dc66-4f12-8da1-cd89ab819976.png',
  },
  {
    name: 'Jadwal Sholat',
    target: ' jadwal-sholat',
    img: 'https://images.tokopedia.net/img/cache/100-square/MIPuRC/2021/9/6/84c1e0d4-26cc-4b68-a2cb-d753e2c84b91.png',
  },
];

function SubHalalCorner() {
  return (
    <>
      <h2 className="text-xl font-bold px-4 py-5">Halal Corner</h2>
      <div className="grid grid-cols-5 gap-2">
        {subFeatured.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-2 text-xs font-bold py-1.5 px-4 rounded-md hover:bg-customTokped-light cursor-pointer"
          >
            <Image
              src={item.img}
              alt={item.name}
              width={35}
              height={35}
              priority
            />
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
}

export default SubHalalCorner;

import Image from 'next/image';
import MainCarousel from './KategoriPilihan/MainCarousel';
import TopupTagihan from './KategoriPilihan/TopupTagihan';

const kategori = [
  {
    name: 'Kategori',
    img: 'https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/5/461aa510-5537-41b7-92d4-684d39c9930e.png',
  },
  {
    name: 'Handphone & Tablet',
    img: 'https://images.tokopedia.net/img/cache/160-square/iEWsxH/2023/4/27/4b81a081-0f97-4b9d-9ee1-8be5c938b14d.png',
  },
  {
    name: 'Top-Up & Tagihan',
    img: 'https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/5/75f2fb8a-a4ca-4cd6-a166-7279daef1d5b.png',
  },
  {
    name: 'Elektronik',
    img: 'https://images.tokopedia.net/img/cache/160-square/iEWsxH/2023/4/27/ad58b90c-d307-40b8-9f39-0146c67b4cdc.png',
  },
  {
    name: 'Perawatan Hewan',
    img: 'https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/6/65d13c55-c5c6-4ece-b957-99912c3f8f3c.png',
  },
  {
    name: 'Travel & Entertainment',
    img: 'https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/6/b5af3e8e-bc2e-48b4-8d00-6d49ec8f4d50.png',
  },
  {
    name: 'Keuangan',
    img: 'https://images.tokopedia.net/img/cache/160-square/iEWsxH/2023/4/27/8b1b8635-8822-4007-90c3-403aa53cd207.png',
  },
  {
    name: 'Komputer & Laptop',
    img: 'https://images.tokopedia.net/img/cache/160-square/iEWsxH/2021/10/5/be48df38-d1e5-48ba-92c4-5644f4c2939b.png',
  },
];

function KategoriPilihan() {
  return (
    <div className="xs:flex hidden flex-col rounded-xl shadow-md p-4 my-5 gap-8">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className=" space-y-3">
          <h2 className="text-xl font-bold">Kategori Pilihan</h2>
          <MainCarousel />
        </div>
        <div className="space-y-3">
          <div className="flex gap-3 items-center">
            <h2 className="text-xl font-bold">Top Up & Tagihan</h2>
            <a
              href=""
              className="text-customTokped-netral text-sm font-semibold"
            >
              Lihat Semua
            </a>
          </div>
          <TopupTagihan />
        </div>
      </div>
      <div className="flex overflow-x-auto flex-shrink-0 w-full custom-scrollbar gap-2">
        {kategori.map((item, index) => (
          <div
            key={index}
            className="flex flex-shrink-0 items-center gap-1 border py-1.5 px-2.5 rounded-full whitespace-nowrap cursor-pointer"
          >
            <Image src={item.img} alt={item.name} width={25} height={25} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KategoriPilihan;

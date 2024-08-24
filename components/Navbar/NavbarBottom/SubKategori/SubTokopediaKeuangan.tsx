import Image from 'next/image';

const subFeatured = [
  {
    name: 'Proteksi',
    target: 'proteksi',
    img: 'https://images.tokopedia.net/img/MIPuRC/2023/1/25/0496a0d2-7371-45ab-99ec-e446958a0762.png',
  },
  {
    name: 'Klaim Proteksi',
    target: 'klaim-proteksi',
    img: 'https://images.tokopedia.net/img/MIPuRC/2023/1/25/c9364307-9184-478a-a0c1-1be3052a55c3.png',
  },
  {
    name: 'Emas',
    target: 'emas',
    img: 'https://images.tokopedia.net/img/MIPuRC/2022/8/18/0d7b8ff3-36fa-483c-a2dc-31c63d38d57e.png',
  },
  {
    name: 'Reksa Dana',
    target: 'reksa-dana',
    img: 'https://images.tokopedia.net/img/MIPuRC/2022/8/18/2fcff856-4fd4-4a75-b2d1-30eac68535a6.png',
  },
  {
    name: 'Dana Instan',
    target: 'dana-instan',
    img: 'https://images.tokopedia.net/img/MIPuRC/2022/8/18/1ce57919-21eb-4246-a403-946cf72b8689.png',
  },
  {
    name: 'Modal Toko',
    target: 'modal-toko',
    img: 'https://images.tokopedia.net/img/MIPuRC/2022/8/18/3a2a80d9-db1d-4729-85fd-9f95ff79241e.png',
  },
  {
    name: 'Tokopedia Giftcard',
    target: 'tokopedia-giftcard',
    img: 'https://images.tokopedia.net/img/MIPuRC/2022/8/18/ac621c92-553b-4e92-8dc1-2173d5ee5bd8.png',
  },
];

function SubTokopediaKeuangan() {
  return (
    <>
      <h2 className="text-xl font-bold px-4 py-5">Tokopedia Keuangan</h2>
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

export default SubTokopediaKeuangan;

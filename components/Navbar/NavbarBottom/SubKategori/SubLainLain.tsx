import Image from 'next/image';

const subFeatured = [
  {
    name: 'Belanja di Kotamu',
    target: 'belanja-di-kotamu',
    img: 'https://images.tokopedia.net/img/cache/100-square/MIPuRC/2021/8/7/e06cc5c0-ea69-4c01-abde-19575afcb4e6.png',
  },
  {
    name: 'Tokopedia Clean',
    target: ' tokopedia-clean',
    img: 'https://images.tokopedia.net/img/cache/100-square/MIPuRC/2021/5/28/9c2a0cf7-a1ec-4635-88fd-7b3f77174868.png',
  },
  {
    name: 'Tukar Tambah',
    target: 'tukar-tambah',
    img: 'https://images.tokopedia.net/img/MIPuRC/2023/6/21/0daddcd3-d739-4fbe-bcec-541fdda3ccc7.png',
  },
  {
    name: 'Tokopedia Affiliate',
    target: ' tokopedia-affiliate',
    img: 'https://images.tokopedia.net/img/MIPuRC/2023/6/21/4a36b31b-9ad4-438f-aaaf-2cdd26233eca.png',
  },
];

function SubLainLain() {
  return (
    <>
      <h2 className="text-xl font-bold px-4 py-5">Lain-Lain</h2>
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

export default SubLainLain;

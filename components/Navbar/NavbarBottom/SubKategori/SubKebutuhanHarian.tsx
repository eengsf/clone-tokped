import Image from 'next/image';

const subKebutuhanHarian = [
  {
    name: 'Ibu & Bayi',
    target: 'ibu-bayi',
    img: 'https://images.tokopedia.net/img/MIPuRC/2023/6/20/d2f80def-fbb5-4fab-ac1c-499f774687af.png',
  },
  {
    name: 'Perawatan Hewan',
    target: 'perawatan-hewan',
    img: 'https://images.tokopedia.net/img/cache/100-square/MIPuRC/2021/5/28/d934b056-bbd8-49ab-b0d8-24608a6029a6.png',
  },
];

function SubKebutuhanHarian() {
  return (
    <>
      <h2 className="text-xl font-bold px-4 py-5">Kebutuhan Harian</h2>
      <div className="grid grid-cols-5 gap-2">
        {subKebutuhanHarian.map((item, index) => (
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

export default SubKebutuhanHarian;

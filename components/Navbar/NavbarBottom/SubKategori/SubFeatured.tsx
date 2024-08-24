import Image from 'next/image';

const subFeatured = [
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
];

function SubFeatured() {
  return (
    <>
      <h2 className="text-xl font-bold px-4 py-5">Featured</h2>
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

export default SubFeatured;

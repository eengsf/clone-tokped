import Link from 'next/link';

const list = [
  {
    name: 'Tentang Tokopedia',
    link: '/',
  },
  {
    name: 'Mitra Tokopedia',
    link: '/',
  },
  {
    name: 'Mulai Berjualan',
    link: '/',
  },
  {
    name: 'Promo',
    link: '/',
  },
  {
    name: 'Tokopedia Care',
    link: '/',
  },
];

function FindList() {
  return (
    <div className="flex flex-1 gap-2 justify-evenly items-center max-w-[575px] overflow-hidden">
      {list.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className="text-customTokped-medium text-xs hover:text-customTokped-netral truncate max-w-32"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default FindList;

import Link from 'next/link';

const list = [
  {
    name: 'Flazz BCA',
    link: '/',
  },
  {
    name: 'Pull Up Bar',
    link: '/',
  },
  {
    name: 'Mesin Cuci Portable',
    link: '/',
  },
  {
    name: 'Monitor 27 Inch',
    link: '/',
  },
  {
    name: 'Topi Pria',
    link: '/',
  },
  {
    name: 'SD Card',
    link: '/',
  },
];

function FindList() {
  return (
    <div className="xs:flex hidden flex-1 gap-3 px-5 truncate">
      {list.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          className="text-xs text-customTokped-medium hover:text-customTokped-netral truncate"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default FindList;

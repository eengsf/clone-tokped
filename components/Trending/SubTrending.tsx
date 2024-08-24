import Image from 'next/image';

type Product = {
  name: string;
  img: string;
  stok: number;
};

type SubTrendingProps = {
  data: Product[];
};

function formatStok(sold: number): string {
  if (sold >= 1000) {
    return `${(sold / 1000).toFixed(1)}rb`;
  }
  return sold.toString();
}

function SubTrending({ data }: SubTrendingProps) {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex border col-span-1 rounded-md shadow-md"
        >
          <Image
            src={`${item.img}`}
            alt="trending"
            width={100}
            height={100}
            className="w-[35%] rounded-l-md"
          />
          <div className="flex flex-col items-center m-auto sm:text-base text-xs">
            <p className="font-bold text-center xs:text-base text-sm">
              {item.name.split(' ').slice(0, 2).join(' ')}
            </p>
            <p className="xs:text-sm text-xs text-customTokped-medium">
              {formatStok(item.stok)} produk
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default SubTrending;

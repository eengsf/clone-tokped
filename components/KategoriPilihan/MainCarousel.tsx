'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { useState } from 'react';

const kategoriPilihan = [
  {
    target: 'makanan-kering',
    img: 'https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp',
  },
  {
    target: 'figure',
    img: 'https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_c6f70915-577f-4cd4-834c-daf892265ef0.jpg.webp',
  },
  {
    target: 'tas-selempang-pria',
    img: 'https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_d7c67b76-9ff4-46f9-93a3-ec4be4918439.jpg.webp',
  },
  {
    target: 'flat-shoes-wanita',
    img: 'https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_76d08c44-8194-4454-9fb0-1e7a64b656aa.jpg.webp',
  },
  {
    target: 'toples',
    img: 'https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_cfe03d9c-d79f-4327-8247-458429e1b116.jpg.webp',
  },
  {
    target: 'harddisk-flashdisk',
    img: 'https://images.tokopedia.net/img/cache/200/attachment/2018/8/11/3127195/3127195_2883bb63-8f91-4c9c-a423-d68b22e51b78.jpg.webp',
  },
];

function MainCarousel() {
  const [prevNext, setPrevNext] = useState(false);
  const [api, setApi] = useState<CarouselApi>();

  const handleMouseEnter = () => {
    // plugin.current.stop();
    setPrevNext(true);
  };

  const handleMouseLeave = () => {
    // plugin.current.play();
    setPrevNext(false);
  };

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full "
    >
      <CarouselContent className="-ml-1">
        {kategoriPilihan.map((item, index) => (
          // <CarouselItem key={index} className=" pl-1 basis-1/5">
          //   <div className="p-1">
          //     <Card>
          //       <CardContent className="flex aspect-square items-center justify-center p-6">

          //       </CardContent>
          //     </Card>
          //   </div>
          // </CarouselItem>
          <CarouselItem key={index} className="basis-1/4">
            <Image
              src={item.img}
              alt={item.target}
              width={300}
              height={300}
              priority
              className="w-full h-full rounded-xl border"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        onMouseEnter={() => setPrevNext(true)}
        className={`w-8 h-8 absolute z-10 top-1/2 -translate-y-1/2 -left-2 translate-x-10 transition-all duration-500 ease-in-out ${
          prevNext ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}
      />
      <CarouselNext
        onMouseEnter={() => setPrevNext(true)}
        className={`w-8 h-8 absolute z-10 top-1/2 -translate-y-1/2 -right-2 -translate-x-10 transition-all duration-500 ease-in-out ${
          prevNext ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}
      />
    </Carousel>
  );
}

export default MainCarousel;

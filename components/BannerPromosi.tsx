'use client';

import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const promosi = [
  {
    target: 'promosi-1',
    img: 'https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/7/31/ab19db24-34f0-46c6-8089-5655286222a3.jpg.webp?ect=4g',
  },
  {
    target: 'promosi-2',
    img: 'https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/7/26/10da9fec-9073-441d-a88e-6f674a28a877.jpg.webp?ect=4g',
  },
  {
    target: 'promosi-3',
    img: 'https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/7/31/a4407228-6cf7-499a-9c1b-8b5d1d9f0010.jpg.webp?ect=4g',
  },
  {
    target: 'promosi-4',
    img: 'https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/7/26/bd0e2845-41a2-4ea4-af13-9415d6ecccb3.jpg.webp?ect=4g',
  },
  {
    target: 'promosi-5',
    img: 'https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/6/27/d00dbb58-ecca-456f-97ac-8eca1f30aeb5.jpg.webp?ect=4g',
  },
];

function BannerPromosi() {
  const [prevNext, setPrevNext] = useState(false);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const plugin = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    })
  );

  const handleMouseEnter = () => {
    plugin.current.stop();
    setPrevNext(true);
  };

  const handleMouseLeave = () => {
    plugin.current.play();
    setPrevNext(false);
  };

  return (
    <Carousel
      plugins={[plugin.current]}
      setApi={setApi}
      opts={{ loop: true }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full max-w-full xs:rounded-xl rounded-none relative"
    >
      <CarouselContent>
        {promosi.map((item, index) => (
          <CarouselItem
            key={index}
            className="w-full xs:h-full h-32 rounded-xl"
          >
            <Image
              src={item.img}
              alt={item.target}
              width={1200}
              height={600}
              priority
              className="w-full h-full xs:rounded-xl rounded-none"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious
        onMouseEnter={() => setPrevNext(true)}
        className={`absolute z-10 top-1/2 -translate-y-1/2 -left-4 translate-x-10 transition-all duration-500 ease-in-out ${
          prevNext ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}
      />
      <CarouselNext
        onMouseEnter={() => setPrevNext(true)}
        className={` absolute z-10 top-1/2 -translate-y-1/2 -right-4 -translate-x-10 transition-all duration-500 ease-in-out ${
          prevNext ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}
      />
    </Carousel>
  );
}

export default BannerPromosi;

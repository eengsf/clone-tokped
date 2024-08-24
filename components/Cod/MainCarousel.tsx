'use client';

import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { useState } from 'react';
import { products } from '@/data/data';

function formatPrice(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function formatSold(sold: number): string {
  if (sold >= 1000) {
    return `${(sold / 1000).toFixed(1)}rb`;
  }
  return sold.toString();
}

export default function MainCarousel() {
  const [prevNext, setPrevNext] = useState(false);
  const handleMouseEnter = () => {
    setPrevNext(true);
  };

  const handleMouseLeave = () => {
    setPrevNext(false);
  };
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full "
    >
      <CarouselContent className="sm:-ml-2 -ml-0">
        {products
          .slice()
          .reverse()
          .map((item, index) => (
            <CarouselItem
              key={index}
              className="xl:basis-1/6 lg:basis-1/5 md:basis-1/4 sm:basis-1/3 basis-1/2  sm:pl-2 pl-0"
            >
              <div className="p-1">
                <Card className="max-h-96  flex flex-col shadow-md">
                  <div className="h-1/2">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="h-1/2 flex flex-col gap-1.5  p-1.5">
                    <span className="text-sm line-clamp-2">{item.name}</span>
                    <span className="text-lg font-bold">
                      Rp.{formatPrice(item.harga)}
                    </span>
                    <span className="text-xs text-customTokped-medium">
                      {item.kota}
                    </span>
                    <span className="text-xs text-customTokped-medium">
                      {item.rating / 10} | {formatSold(item.terjual)} terjual
                    </span>
                  </div>
                </Card>
              </div>
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

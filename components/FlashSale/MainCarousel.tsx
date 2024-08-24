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
import { Progress } from '../ui/progress';
import { products } from '@/data/data';

function formatPrice(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
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
      className="w-full"
    >
      <CarouselContent className="md:-ml-2 -ml-0">
        {products.map((item, index) => (
          <CarouselItem
            key={index}
            className={`lg:basis-1/5 md:basis-1/4 sm:basis-1/3 basis-1/2  md:pl-2 pl-0 ${
              ((item.stok - item.terjual) / item.stok) * 100 < 60
                ? 'hidden'
                : ''
            }`}
          >
            <div className="p-1">
              <Card className="sm:h-[276px] h-64 flex flex-col shadow-md">
                <div className="h-[65%]">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="h-[35%] flex flex-col px-1.5 py-2 justify-between">
                  <div className="flex flex-col">
                    <span className=" font-bold">
                      Rp.
                      {formatPrice(
                        item.harga - (item.harga * item.diskon) / 100
                      )}
                    </span>
                    <span className="text-xs text-slate-400 flex gap-1.5">
                      <span className="line-through">
                        Rp.{formatPrice(item.harga)}
                      </span>
                      <span className="text-red-500 font-bold">
                        {item.diskon}%
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <Progress
                      value={((item.stok - item.terjual) / item.stok) * 100}
                      className="h-1 [&>div]:bg-red-500"
                    />
                    <span className="text-xs font-bold text-customTokped-medium">
                      Segera Habis
                    </span>
                  </div>
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

'use client';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import SubBelanja from './SubKategori/SubBelanja';
import SubFeatured from './SubKategori/SubFeatured';
import SubKebutuhanHarian from './SubKategori/SubKebutuhanHarian';
import SubHalalCorner from './SubKategori/SubHalalCorner';
import SubTokopediaKeuangan from './SubKategori/SubTokopediaKeuangan';
import SubLainLain from './SubKategori/SubLainLain';

const categories = [
  { name: 'Belanja', target: 'belanja' },
  { name: 'Featured', target: 'featured' },
  { name: 'Kebutuhan Harian', target: 'kebutuhan-harian' },
  { name: 'Tokopedia Keuangan', target: 'tokopedia-keuangan' },
  { name: 'Halal Corner', target: 'halal-corner' },
  { name: 'Lain-Lain', target: 'lain-lain' },
];

function Kategori() {
  const [active, setActive] = useState('belanja');
  return (
    <div>
      <HoverCard openDelay={0}>
        <HoverCardTrigger className="hover:bg-customTokped-light rounded-md py-1.5 px-2 cursor-pointer">
          kategori
        </HoverCardTrigger>
        <HoverCardContent className="w-screen h-[70vh] translate-y-10 rounded-none py-0 ps-9 pe-0">
          <Tabs defaultValue="belanja" className="w-full h-full ">
            <TabsList className="space-x-4 h-10 bg-transparent ">
              {categories.map((category, index) => (
                <TabsTrigger
                  key={index}
                  className={`hover:text-customTokped-netral ${
                    active === `${category.target}`
                      ? 'transform -translate-y-0.5'
                      : ''
                  }`}
                  onClick={() => setActive(`${category.target}`)}
                  value={category.target}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent
              value="belanja"
              className="w-full h-[calc(100%-50px)] overflow-y-auto space-y-1 "
            >
              <SubBelanja />
            </TabsContent>

            <TabsContent
              value="featured"
              className="w-full h-[calc(100%-50px)] overflow-y-auto space-y-1  "
            >
              <SubFeatured />
            </TabsContent>
            <TabsContent
              value="kebutuhan-harian"
              className="w-full h-[calc(100%-50px)] overflow-y-auto space-y-1  "
            >
              <SubKebutuhanHarian />
            </TabsContent>
            <TabsContent
              value="tokopedia-keuangan"
              className="w-full h-[calc(100%-50px)] overflow-y-auto space-y-1  "
            >
              <SubTokopediaKeuangan />
            </TabsContent>

            <TabsContent
              value="halal-corner"
              className="w-full h-[calc(100%-50px)] overflow-y-auto space-y-1 "
            >
              <SubHalalCorner />
            </TabsContent>

            <TabsContent
              value="lain-lain"
              className="w-full h-[calc(100%-50px)] overflow-y-auto space-y-1 "
            >
              <SubLainLain />
            </TabsContent>
          </Tabs>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

export default Kategori;

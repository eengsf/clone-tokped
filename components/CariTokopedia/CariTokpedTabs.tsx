'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';
import { cariTokopedia } from '@/data/data';

function CariTokpedTabs() {
  const [prevNext, setPrevNext] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const [calc, setCalc] = useState({ old: 1, new: 1 });

  function handleNext(value: number) {
    setCalc({ old: calc.new, new: value });
  }

  const getBorderClass = (value: number) => {
    if (calc.new === value) {
      return 'opacity-100 translate-x-0';
    }
    if (calc.new < calc.old && value === calc.old) {
      return 'opacity-0 -translate-x-full';
    }
    if (calc.new > calc.old && value === calc.old) {
      return 'opacity-0 translate-x-full';
    }
    return 'opacity-0';
  };
  return (
    <Tabs defaultValue="Promo" className="w-full ">
      <TabsList
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
        className="bg-transparent h-fit w-full flex justify-evenly overflow-x-hidden gap-7 relative cursor-pointer border-b border-slate-300  rounded-none"
      >
        {cariTokopedia.map((item, index) => (
          <TabsTrigger
            key={index}
            value={`${item.name}`}
            onClick={() => handleNext(index + 1)}
            className={`${
              prevNext ? '-translate-x-72' : 'translate-x-0'
            } font-bold`}
          >
            {item.name}
            <div
              className={`w-full h-0.5 rounded-sm bg-customTokped-netral absolute -bottom-1 left-0 transition-all duration-500 ${getBorderClass(
                index + 1
              )}`}
            ></div>
          </TabsTrigger>
        ))}
        {prevNext === true ? (
          <button
            onClick={() => setPrevNext(false)}
            className={`p-2 rounded-full bg-white absolute -translate-y-1/2 top-1/2 left-0 transition-all duration-1000 ${
              showButton
                ? 'translate-x-0 opacity-100'
                : 'translate-x-8 opacity-0'
            }`}
          >
            <IoIosArrowBack size={20} />
          </button>
        ) : (
          <button
            onClick={() => setPrevNext(true)}
            className={`p-2 rounded-full bg-white absolute -translate-y-1/2 top-1/2 right-0 transition-all duration-500 ${
              showButton
                ? 'translate-x-0 opacity-100'
                : '-translate-x-8 opacity-0'
            } `}
          >
            <IoIosArrowForward size={20} />
          </button>
        )}
      </TabsList>
      {cariTokopedia.map((item, index) => (
        <TabsContent key={index} value={`${item.name}`}>
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 p-3">
            {cariTokopedia
              .find((value) => value.name === item.name)
              ?.sub.map((subItem, subIndex) => (
                <p
                  key={subIndex}
                  className="text-xs text-customTokped-medium border-b pb-3 cursor-pointer"
                >
                  {subItem}
                </p>
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default CariTokpedTabs;

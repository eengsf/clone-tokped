'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import Pulsa from './Pulsa/Pulsa';
import PaketData from './PaketData/PaketData';
import ListrikPLN from './ListrikPLN/ListrikPLN';
import Flight from './Flight/Flight';

function TopupTagihan() {
  const [borderFocus, setBorderFocus] = useState(1);
  const [calc, setCalc] = useState({ old: 1, new: 1 });

  function handleNext(value: number) {
    setCalc({ old: calc.new, new: value });
    setBorderFocus(value);
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
    <Tabs defaultValue="pulsa" className="w-full border rounded-xl">
      <TabsList className="bg-transparent h-13 grid grid-cols-4">
        <TabsTrigger
          value="pulsa"
          onClick={() => handleNext(1)}
          className={`font-bold text-sm relative`}
        >
          Pulsa
          <div
            className={`w-full h-0.5 rounded-sm bg-customTokped-netral absolute bottom-0 left-0 transition-all duration-500 ${getBorderClass(
              1
            )}`}
          ></div>
        </TabsTrigger>
        <TabsTrigger
          value="paket-data"
          onClick={() => handleNext(2)}
          className={`font-bold text-sm relative`}
        >
          Paket Data
          <div
            className={`w-full h-0.5 rounded-sm bg-customTokped-netral absolute bottom-0 left-0 transition-all duration-500 ${getBorderClass(
              2
            )}`}
          ></div>
        </TabsTrigger>
        <TabsTrigger
          value="flight"
          onClick={() => handleNext(3)}
          className={`font-bold text-sm relative`}
        >
          Flight
          <div
            className={`w-full h-0.5 rounded-sm bg-customTokped-netral absolute bottom-0 left-0 transition-all duration-500 ${getBorderClass(
              3
            )}`}
          ></div>
        </TabsTrigger>
        <TabsTrigger
          value="listrik-pln"
          onClick={() => handleNext(4)}
          className={`font-bold text-sm relative`}
        >
          Listrik PLN
          <div
            className={`w-full h-0.5 rounded-sm bg-customTokped-netral absolute bottom-0 left-0 transition-all duration-500 ${getBorderClass(
              4
            )}`}
          ></div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="pulsa" className="px-3 pb-4 pt-2">
        <Pulsa />
      </TabsContent>
      <TabsContent value="paket-data" className="px-3 pb-4 pt-2">
        <PaketData />
      </TabsContent>
      <TabsContent value="flight" className="px-3 pb-4 pt-2">
        <Flight />
      </TabsContent>
      <TabsContent value="listrik-pln" className="px-3 pb-4 pt-2">
        <ListrikPLN />
      </TabsContent>
    </Tabs>
  );
}

export default TopupTagihan;

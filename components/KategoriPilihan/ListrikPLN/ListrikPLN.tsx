'use client';

import InputDropDown from '@/components/ui/InputDropDown';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

function ListrikPLN() {
  const [meterNumber, setMeterNumber] = useState<string>('');

  return (
    <div className="flex gap-2">
      <div className="flex-1 grid grid-cols-3 gap-2">
        <div className="col-span-1 max-w-full gap-1.5 ">
          <Label
            htmlFor="select"
            className="text-xs font-extrabold text-customTokped-medium"
          >
            Jenis Produk Listrik
          </Label>
          <InputDropDown
            options={[
              { label: 'Token Listrik', value: '1 value' },
              { label: 'Tagihan Listrik', value: '2 value' },
              { label: 'PLN Non Taglis', value: '3 value' },
            ]}
            placeholder={'Produk Listrik'}
          />
        </div>
        <div className="col-span-1 max-w-full items-center gap-1.5 ">
          <Label
            htmlFor="email"
            className="text-xs font-extrabold text-customTokped-medium"
          >
            Nomor Meter/ID Pel
          </Label>
          <div className="relative">
            <input
              type="text"
              placeholder="Masukkan Nomor"
              value={meterNumber}
              onChange={(e) => setMeterNumber(e.target.value)}
              className="px-3 py-2 h-10 w-full border focus:border-customTokped-netral focus:outline-none text-xs rounded-md "
            />
          </div>
        </div>
        <div className="col-span-1 max-w-full gap-1.5 ">
          <Label
            htmlFor="select"
            className="text-xs font-extrabold text-customTokped-medium"
          >
            Nominal
          </Label>
          <InputDropDown
            options={[
              { label: 'Rp 20.000', value: '1 value' },
              { label: 'Rp 50.000', value: '2 value' },
              { label: 'Rp 100.000', value: '3 value' },
              { label: 'Rp 200.000', value: '4 value' },
              { label: 'Rp 500.000', value: '5 value' },
              { label: 'Rp 1.000.000', value: '6 value' },
              { label: 'Rp 5.000.000', value: '7 value' },
              { label: 'Rp 10.000.000', value: '8 value' },
              { label: 'Rp 50.000.000', value: '9 value' },
            ]}
            placeholder={'Pilih Nominal'}
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <Label className="opacity-0 text-sm font-bold text-customTokped-medium">
          None
        </Label>
        <Button
          disabled={meterNumber === ''}
          className={`${
            meterNumber !== ''
              ? 'bg-customTokped-netral text-customTokped-light hover:bg-customTokped-netraldark'
              : 'bg-customTokped-light text-customTokped-medium'
          } font-bold`}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default ListrikPLN;

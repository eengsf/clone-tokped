'use client';

import InputDropDown from '@/components/ui/InputDropDown';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const providers = [
  {
    name: 'Telkomsel',
    prefix: ['0811', '0812', '0813', '0821', '0822', '0852', '0853'],
    logo: 'https://images.tokopedia.net/img/elTgOa/2024/1/30/422678b1-aca8-4ffb-bd8b-beb3ed216cb7.png',
  },
  {
    name: 'Indosat',
    prefix: ['0814', '0815', '0816', '0855', '0856', '0857', '0858'],
    logo: 'https://images.tokopedia.net/img/elTgOa/2024/1/30/a8570726-6e83-4658-ac9d-3b283bd9c8b2.png',
  },
  {
    name: 'XL',
    prefix: ['0817', '0818', '0819', '0859', '0877', '0878'],
    logo: 'https://images.tokopedia.net/img/elTgOa/2022/6/24/48f443e6-9d3c-4a10-a6f3-b04e4aa550ee.png',
  },
  {
    name: 'Tri',
    prefix: ['0896', '0897', '0898', '0899'],
    logo: 'https://images.tokopedia.net/img/elTgOa/2022/6/24/b78ddcbb-bfa7-404c-8a89-b7de911e8b51.png',
  },
  {
    name: 'Smartfren',
    prefix: ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888'],
    logo: 'https://images.tokopedia.net/img/elTgOa/2024/5/31/bb4012ba-dc2c-4db4-b394-39469b6562fb.png',
  },
  {
    name: 'Axis',
    prefix: ['0831', '0832', '0833', '0838'],
    logo: 'https://images.tokopedia.net/img/recharge/operator/axis_2.png',
  },
];

function PaketData() {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [providerLogo, setProviderLogo] = useState<string | null>(null);
  const [activeButton, setActiveButton] = useState('');

  useEffect(() => {
    if (phoneNumber.length >= 4) {
      const foundProvider = providers.find((provider) =>
        provider.prefix.some((prefix) => phoneNumber.startsWith(prefix))
      );
      setProviderLogo(foundProvider ? foundProvider.logo : null);
    } else {
      setProviderLogo(null);
    }
  }, [phoneNumber]);
  return (
    <div className="flex gap-2">
      <div className="flex-1 grid grid-cols-2 gap-2">
        <div className="col-span-1 max-w-full items-center gap-1.5 ">
          <Label
            htmlFor="email"
            className="text-xs font-extrabold text-customTokped-medium"
          >
            Nomor Telepon
          </Label>
          <div className="relative">
            <input
              type="text"
              placeholder="Masukkan Nomor"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="px-3 py-2 h-10 w-full border focus:border-customTokped-netral focus:outline-none text-xs rounded-md "
            />
            {providerLogo && (
              <Image
                src={providerLogo}
                alt="Provider Logo"
                width={35}
                height={35}
                className="absolute top-1/2 -translate-y-1/2 right-3"
                priority
              />
            )}
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
              { label: 'Kuota Bulanan 59rb/30hr, 31GB', value: '1 value' },
              { label: 'Kuota Mingguan 25rb/7hr, 6GB', value: '2 value' },
              { label: 'Kuota Harian 5rb/1hr, 1GB', value: '3 value' },
            ]}
            placeholder={providerLogo ? 'Pilih' : ''}
            disable={!providerLogo}
            onSelect={(value) => setActiveButton(value)}
            valueActive={!providerLogo ? true : false}
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-0.5">
        <Label className="opacity-0 text-sm font-bold text-customTokped-medium">
          None
        </Label>
        <Button
          disabled={activeButton === '' || !providerLogo}
          className={`${
            activeButton !== '' && providerLogo
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

export default PaketData;

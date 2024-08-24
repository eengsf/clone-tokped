import { LuMapPin } from 'react-icons/lu';
import { IoIosArrowDown } from 'react-icons/io';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import { Button } from '../../ui/button';
import { RxCross2 } from 'react-icons/rx';
import { CiSearch } from 'react-icons/ci';
import { Input } from '@/components/ui/input';

function Location() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="text-xs text-customTokped-dark flex gap-2 cursor-pointer">
          <LuMapPin size={18} />
          <div className="flex gap-0.5">
            <span>Dikirim ke</span>
            <span className="font-bold">Jakarta Pusat </span>
          </div>
          <IoIosArrowDown size={16} />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-3xl h-[395px] ">
        <AlertDialogHeader className="relative flex gap-10">
          <AlertDialogCancel className="bg-none hover:bg-none border-none absolute xs:right-0 xs:top-0 -right-6 -top-6 py-0 px-2">
            <RxCross2 size={26} />
          </AlertDialogCancel>
          <AlertDialogTitle>
            <h2 className="text-xl font-bold">Mau Kirim Belanjaan Kemana?</h2>
            <p className="text-customTokped-medium font-normal text-sm">
              Biar pengalaman belanjamu lebih baik, pilih alamat dulu
            </p>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center p-3.5 rounded-md shadow-md shadow-customTokped-medium">
                <div className="flex flex-col">
                  <h2 className="font-bold text-customTokped-dark text-base">
                    Masuk
                  </h2>
                  <p className="text-customTokped-medium">
                    Masuk dulu biar bisa memilih alamat pengirimanmu
                  </p>
                </div>
                <Button className="font-bold text-customTokped-netrallight hover:bg-customTokped-netraldark bg-customTokped-netral text-base px-10 py-6">
                  Masuk
                </Button>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="font-bold text-customTokped-dark text-base">
                  Mau pakai cara lain?
                </h2>
                <div className="flex gap-2 justify-between">
                  <div className="relative items-center flex flex-1">
                    <CiSearch
                      size={22}
                      className="absolute left-3 text-customTokped-medium -translate-y-1/2 top-1/2"
                    />
                    <Input
                      type="text"
                      placeholder="Pilih kota atau kecamatan"
                      className="w-full h-full pl-10 border-customTokped-medium"
                    />
                  </div>
                  <Button className="font-bold text-customTokped-medium bg-customTokped-light hover:text-customTokped-medium hover:bg-customTokped-light text-base px-10 py-6">
                    Gunakan
                  </Button>
                </div>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Location;

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface Option {
  label: string;
  value: string;
}

interface SelectDropdownProps {
  options: Option[];
  placeholder?: string;
  onSelect?: (value: string) => void;
  className?: string;
  disable?: boolean;
  valueActive?: boolean;
}

const InputDropDown = ({
  options,
  placeholder = 'Pilih opsi...',
  disable = false,
  onSelect = (value: string) => {
    console.log('Selected:', value);
  },
  className = '',
  valueActive = false,
}: SelectDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    onSelect(option.value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div className="flex items-center border px-3 py-2 h-10 rounded-md cursor-pointer focus:border-customTokped-netral">
        <div onClick={toggleDropdown} className="w-full">
          <input
            type="text"
            placeholder={placeholder}
            value={valueActive === true ? '' : selectedOption}
            disabled={disable}
            readOnly
            className="text-xs bg-transparent outline-none  cursor-pointer w-full"
          />
        </div>
        <IoIosArrowDown size={16} className="absolute right-3 cursor-default" />
      </div>

      {isOpen && (
        <div className="absolute left-0 w-full max-h-52 overflow-y-auto bg-white border border-gray-300 mt-1 rounded shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="p-2 hover:bg-gray-100 cursor-pointer active:border-s-2 active:border-customTokped-netral text-sm"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputDropDown;

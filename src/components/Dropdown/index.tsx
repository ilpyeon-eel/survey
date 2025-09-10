// Dropdown.tsx
'use client';

import { useState } from 'react';
import DropdownList from './DropdownList';
import Image from 'next/image';

type DropdownProps = {
  options: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export default function Dropdown({
  options,
  defaultValue,
  onChange,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue ?? options[0]);

  const toggle = () => setOpen((prev) => !prev);

  const handleSelect = (option: string) => {
    setSelected(option);
    setOpen(false);
    onChange?.(option);
  };

  return (
    <div className="relative w-full mt-[16px]">
      <div
        onClick={toggle}
        className="flex justify-between items-center px-[18px] py-[14px] border border-[#f2f2f2] rounded-[6px] w-full cursor-pointer bg-[white]"
      >
        {selected}
        <Image
          src={'/arrow_drop_down_24.svg'}
          alt="arrow_drop_down"
          height={24}
          width={24}
        />
      </div>

      {open && (
        <div className="absolute left-0 top-full mt-2 z-50 w-full bg-[white]">
          <DropdownList options={options} onSelect={handleSelect} />
        </div>
      )}
    </div>
  );
}

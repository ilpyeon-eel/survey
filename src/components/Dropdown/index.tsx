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
    <>
      <div className="mt-[16px] px-[18px] py-[14px] border border-[#f2f2f2] rounded-[6px] w-full cursor-pointer">
        <div
          onClick={toggle}
          className="flex justify-between w-full bg-white px-3 py-2"
        >
          {selected}

          <Image
            src={'/arrow_drop_down_24.svg'}
            alt="arrow_drop_down"
            height={24}
            width={24}
          />
        </div>
      </div>
      {open && <DropdownList options={options} onSelect={handleSelect} />}
    </>
  );
}

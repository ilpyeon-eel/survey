'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full flex justify-between items-center pl-[20px] pr-[41px] py-[11px] flex-row border-b border-b-[#f2f2f2]">
      <Image
        src="/logo.svg"
        alt="logo"
        width={89}
        height={36}
        quality={100}
        priority
      />
      <div
        className="flex gap-[6px] items-center cursor-pointer"
        onClick={() => setOpen(!isOpen)}
      >
        <Image
          src={'/Japan.svg'}
          alt="japan"
          width={24}
          height={24}
          quality={10}
          priority
        />
        <span>日本語</span>
        <Image
          src={'/arrow_drop_down_24.svg'}
          alt="arrow_drop_down"
          width={18}
          height={18}
          quality={10}
          priority
        />
      </div>
    </header>
  );
}

'use client';

import React from 'react';
import clsx from 'clsx';

type ButtonSProps = {
  label: string;
  selected?: boolean; // 선택 여부
  onClick?: () => void;
};

export default function ButtonS({
  label,
  selected = false,
  onClick,
}: ButtonSProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'flex rounded-[6px] h-[48px] items-center justify-center cursor-pointer border',
        selected
          ? 'border-[#FF5900] text-black bg-[white]'
          : 'border-[#F2F2F2] text-black hover:bg-[#f9f9f9]'
      )}
    >
      {label}
    </div>
  );
}

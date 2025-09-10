'use client';

import React from 'react';
import clsx from 'clsx';

type ButtonLProps = {
  label: string;
  selected?: boolean;
  onClick?: () => void;
};

export default function ButtonL({
  label,
  selected = false,
  onClick,
}: ButtonLProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'flex pl-[15px] border rounded-[6px] h-[48px] items-center cursor-pointer',
        selected
          ? 'border-[#FF5900] text-black'
          : 'border-[#F2F2F2] text-black hover:bg-[#f9f9f9]'
      )}
    >
      {label}
    </div>
  );
}
